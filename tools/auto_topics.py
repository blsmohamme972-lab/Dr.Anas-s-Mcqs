"""Prepare one book for the app: mechanical typo fixes, answer parsing and keyword topic assignment.

Usage:
  python3 -I tools/auto_topics.py <book.jsonl> <book-id> <vascular|thoracic|cardiac> <out.json>

Input: the extraction JSONL from Google Drive (one question per line: number, stem, options[{label,text}],
answer as printed, images, note). Output: a JSON array in the "reviewed" format that tools/add_book.py reads.

Every question gets keyCheck "agree" and an empty explanation (no medical review). Questions whose printed
answer cannot be parsed (matching keys like "1-B, 2-C", missing keys, letters outside the options) are listed
at the end: fix them by hand in the output file (set type "matching" + answerText, or reconstruct, or drop)
and record the decision in "note". Topic assignment is keyword based: always do a manual pass over the stems
afterwards and correct wrong topics.
"""
import json, os, re, sys

TOPICS = json.load(open(os.path.join(os.path.dirname(os.path.abspath(__file__)), "topics.json")))
SP_OF = {t: sp for sp, ts in TOPICS.items() for t in ts}

K = {
 # vascular
 "Vascular Biology & Pharmacology": ["heparin", "warfarin", "anticoag", "platelet", "thrombin", "coagulation", "hit ", "heparin-induced", "factor v", "antithrombin", "protein c", "dabigatran", "rivaroxaban", "apixaban", "edoxaban", "intimal hyperplasia", "endotheli", "nitric oxide", "statin", "fibrinoly"],
 "Vascular Diagnostics & Imaging": ["ankle-brachial", "ankle brachial", "abi ", "duplex", "plethysmograph", "doppler", "segmental pressure", "toe pressure", "angiograph", "contrast nephropathy", "waveform"],
 "Atherosclerosis & Medical Therapy": ["atherosclero", "risk factor", "homocyst", "hyperlipid", "ldl", "smoking cessation", "lipoprotein", "plaque"],
 "Carotid & Vertebral Disease": ["carotid", "vertebral", "stroke", "transient ischemic", "tia", "amaurosis", "endarterectomy", "subclavian steal", "fibromuscular dysplasia of the internal"],
 "Abdominal Aortic Aneurysm": ["aortic abdominal aneurysm", "abdominal aneurysm", "aneurysm repair", "inflammatory aneurysm", "aneurysmectomy", "aortic aneurysm", "abdominal aortic aneurysm", "aaa", "infrarenal", "ruptured aneurysm", "evar", "endoleak", "aortic aneurysm repair"],
 "Thoracoabdominal Aortic Disease": ["thoracoabdominal", "tevar", "paraplegia", "spinal cord ischemia", "descending thoracic aort", "type b"],
 "Aortoiliac Occlusive Disease": ["common iliac", "iliac artery", "aortoiliac", "aortobifemoral", "leriche", "iliac occlusi", "iliac stenosis", "axillofemoral", "femorofemoral"],
 "Infrainguinal Disease & Claudication": ["femoral tibial", "femoral popliteal", "femoropopliteal bypass", "tibial bypass", "arterial substitutes", "autograft", "claudication", "femoropopliteal", "superficial femoral", "popliteal artery entrapment", "adventitial cystic", "infrainguinal", "bypass graft to the", "cilostazol", "saphenous vein bypass", "in situ"],
 "Chronic Limb-Threatening Ischemia": ["rest pain", "critical limb", "limb-threatening", "tissue loss", "gangrene", "nonhealing"],
 "Acute Limb Ischemia & Compartment Syndrome": ["acute arterial occlusion", "acute limb", "embolectomy", "embolus", "compartment", "fasciotomy", "reperfusion", "acute ischemia of the", "blue toe", "atheroemboli"],
 "Mesenteric Ischemia": ["mesenteric", "celiac", "intestinal ischemia", "colon ischemia", "ischemic colitis", "median arcuate", "postprandial", "after eating"],
 "Renovascular Disease": ["renal artery", "renovascular", "renin", "fibromuscular", "nephropathy"],
 "Upper Extremity & Thoracic Outlet": ["thoracic outlet", "first rib", "subclavian", "axillary", "upper extremity", "hand ischemia", "paget-schroetter", "effort thrombosis", "cervical rib", "scalene"],
 "Peripheral & Visceral Aneurysms": ["false aneurysm", "popliteal aneurysm", "popliteal artery aneurysm", "femoral aneurysm", "splenic artery aneurysm", "visceral aneurysm", "hepatic artery aneurysm", "pseudoaneurysm", "mycotic", "renal artery aneurysm"],
 "Vasculitis & Vasospastic Disorders": ["temporal artery", "raynaud", "vasculitis", "arteritis", "takayasu", "giant cell", "buerger", "thromboangiitis", "polyarteritis", "behcet", "kawasaki", "ergot", "scleroderma", "vasospas", "fingers turning white"],
 "Venous Thromboembolism": ["deep vein", "dvt", "deep venous thrombosis", "pulmonary embol", "vena cava filter", "ivc filter", "thrombolysis", "phlegmasia", "venous thrombo", "leg swelling", "thrombophilia", "may-thurner", "iliac vein compression"],
 "Chronic Venous Disease & Varicose Veins": ["varicose", "venous insufficiency", "venous ulcer", "saphenous", "venous reflux", "ceap", "perforator", "sclerotherapy", "stasis", "venous hypertension"],
 "Lymphedema & Vascular Malformations": ["lymphedema", "lymphatic", "malformation", "hemangioma", "klippel"],
 "Hemodialysis Access": ["dialysis", "fistula for", "arteriovenous fistula", "av fistula", "hemodialysis", "steal syndrome", "access graft"],
 "Vascular Trauma": ["fat emboli", "trauma", "gunshot", "stab", "injury to the", "penetrating", "blunt"],
 "Diabetic Foot & Amputation": ["diabetic foot", "amputation", "below-knee", "above-knee", "neuropathic ulcer", "charcot", "osteomyelitis"],
 "Endovascular Techniques & Graft Complications": ["pta", "percutaneous transluminal", "infected graft", "graft that has become", "graft infection", "prosthetic graft", "stent", "angioplasty", "endovascular", "guidewire", "sheath", "aortoenteric", "dacron", "ptfe", "anastomotic"],
 # thoracic
 "Esophageal Anatomy & Physiology": ["esophagoscopy", "barium", "anatomic course", "esophageal anatomy", "blood supply of the esophagus", "upper incisor", "esophageal sphincter", "lower esophageal sphincter", "manometr", "peristalsis", "deglutition", "swallowing"],
 "Esophageal Motility Disorders & Diverticula": ["achalasia", "diffuse esophageal spasm", "nutcracker", "zenker", "diverticul", "motility", "myotomy", "cricopharyng", "scleroderma"],
 "GERD & Hiatal Hernia": ["acid secretion", "peptic", "esophagitis", "parietal cell", "reflux", "gerd", "hiatal hernia", "paraesophageal", "fundoplication", "nissen", "belsey", "hill repair", "ph monitoring", "short esophagus", "collis"],
 "Barrett Esophagus": ["barrett", "intestinal metaplasia", "columnar-lined"],
 "Esophageal Cancer": ["esophageal cancer", "carcinoma of the esophagus", "esophageal carcinoma", "esophagectomy", "adenocarcinoma of the esophagus", "squamous cell carcinoma of the esophagus", "ivor lewis", "transhiatal"],
 "Esophageal Perforation & Caustic Injury": ["after vomiting", "vomiting", "perforation", "caustic", "lye", "boerhaave", "mallory", "foreign body", "rupture of the esophagus"],
 "Benign Esophageal Tumors & Strictures": ["benign tumors of the esophagus", "leiomyoma", "stricture", "esophageal web", "schatzki", "benign tumor of the esophagus", "esophageal cyst", "duplication"],
 "Lung Cancer": ["lung cancer", "bronchogenic", "non-small cell", "small cell", "lobectomy", "pneumonectomy", "pancoast", "superior sulcus", "mediastinoscopy", "staging", "carcinoma of the lung", "adenocarcinoma of the lung", "bronchoalveolar", "carcinoid", "bronchial adenoma"],
 "Pulmonary Nodules & Metastases": ["nodule", "coin lesion", "metastas", "metastasectomy"],
 "Benign Lung Disease & Infection": ["bronchiectasis", "lung abscess", "tuberculosis", "aspergill", "fungal", "histoplasm", "hamartoma", "sequestration", "hemoptysis", "empyema necessitans", "pneumonia", "mycobacter"],
 "Pleural Effusion & Empyema": ["pleural effusion", "empyema", "chylothorax", "thoracentesis", "decortication", "pleurodesis", "parapneumonic"],
 "Pneumothorax": ["pneumothorax", "bleb", "bulla"],
 "Pleural Tumors & Mesothelioma": ["mesothelioma", "pleural tumor", "fibrous tumor of the pleura", "asbestos"],
 "Mediastinal Masses": ["anterosuperior mediastin", "mediastinal tumor", "mediastinal mass", "thymoma", "thymus", "germ cell", "teratoma", "seminoma", "neurogenic tumor", "anterior mediastin", "posterior mediastin", "myasthenia", "lymphoma", "bronchogenic cyst", "pericardial cyst"],
 "Mediastinitis & SVC Syndrome": ["mediastinitis", "superior vena cava syndrome", "svc syndrome", "fibrosing mediastinitis"],
 "Trachea & Airway": ["adenoid cystic", "trachea", "tracheal", "tracheostomy", "airway", "subglottic", "bronchoscop", "tracheoesophageal", "tracheomalacia", "bronchopleural fistula"],
 "Chest Wall & Diaphragm": ["chest wall", "pectus", "diaphragm", "eventration", "sternal", "rib tumor", "chondrosarcoma", "thoracic outlet"],
 "Thoracic Trauma": ["flail", "hemothorax", "chest trauma", "rib fracture", "pulmonary contusion", "tracheobronchial injury", "thoracic injur", "chest injur"],
 "Lung Transplantation & Emphysema Surgery": ["lung transplant", "volume reduction", "emphysema", "copd", "bronchiolitis obliterans"],
 "Pulmonary Physiology & Preoperative Evaluation": ["bronchial circulation", "pulmonary circulation", "closing volume", "mucus", "ventilator", "weaning", "fev1", "fev 1", "pulmonary function", "diffusing capacity", "dlco", "preoperative evaluation", "spirometr", "vital capacity", "arterial blood gas", "exercise testing", "ventilation", "compliance"],
 "Thoracic Techniques & Postoperative Care": ["thoracotomy", "thoracoscop", "vats", "air leak", "chest tube", "postoperative complication", "incision", "hyperhidrosis", "sympathectomy"],
 "Pediatric & Congenital Thoracic": ["congenital diaphragmatic", "infant", "newborn", "neonat", "congenital lobar", "cystic adenomatoid", "child"],
 # cardiac
 "Cardiac Anatomy & Physiology": ["coronary circulation", "collaterals", "100% saturated", "cardiac vascular anatomy", "cardiac output", "preload", "afterload", "contractility", "frank-starling", "conduction system", "sinoatrial", "coronary anatomy", "myocardial oxygen", "pressure-volume", "action potential", "calcium"],
 "Cardiopulmonary Bypass & Myocardial Protection": ["cardiopulmonary bypass", "bypass circuit", "oxygenator", "cardioplegia", "myocardial protection", "hypothermia", "circulatory arrest", "protamine", "aprotinin", "hemodilution", "cpb"],
 "Coronary Artery Disease & CABG": ["coronary artery bypass", "cabg", "internal mammary", "internal thoracic", "left main", "three-vessel", "angina", "saphenous vein graft", "off-pump", "coronary artery disease", "radial artery", "pci", "stenting of the coronary"],
 "Myocardial Infarction & Its Complications": ["myocardial infarction", "ventricular septal rupture", "postinfarction", "papillary muscle rupture", "free wall rupture", "ventricular aneurysm", "left ventricular aneurysm", "cardiogenic shock", "acute coronary"],
 "Aortic Valve Disease": ["aortic stenosis", "aortic regurgitation", "aortic insufficiency", "aortic valve", "tavr", "tavi", "ross procedure", "bicuspid"],
 "Mitral Valve Disease": ["mitral", "rheumatic"],
 "Tricuspid & Pulmonary Valve Disease": ["tricuspid", "pulmonary valve", "pulmonic", "carcinoid heart"],
 "Prosthetic Valves & Anticoagulation": ["prosthetic valve", "mechanical valve", "bioprosthe", "valve thrombosis", "homograft", "valve replacement in", "inr"],
 "Infective Endocarditis": ["endocarditis", "vegetation"],
 "Aortic Dissection": ["dissecting", "dissection", "intramural hematoma", "penetrating ulcer"],
 "Thoracic Aortic Aneurysm": ["ascending aort", "aortic root", "aortic arch", "marfan", "annuloaortic", "bentall", "thoracic aortic aneurysm", "sinus of valsalva", "coarctation"],
 "Heart Failure & Mechanical Support": ["artificial heart", "heart failure", "cardiomyopathy", "ventricular assist", "lvad", "intra-aortic balloon", "iabp", "ecmo", "dilated", "hypertrophic", "batista", "dor procedure"],
 "Heart Transplantation": ["heart transplant", "cardiac transplant", "rejection", "cyclosporine", "allograft vasculopathy", "donor heart", "immunosuppress"],
 "Arrhythmias & Surgical Ablation": ["pacing", "bradycardia", "re-entry", "reentry", "av node", "atrial fibrillation", "maze", "wolff", "wpw", "accessory pathway", "arrhythmia", "ventricular tachycardia", "pacemaker", "defibrillator", "ablation", "heart block"],
 "Pericardial Disease": ["pericard", "tamponade", "constrictive"],
 "Cardiac Tumors": ["myxoma", "cardiac tumor", "rhabdomyoma", "fibroelastoma", "tumor of the heart", "sarcoma of the heart"],
 "Cardiac Trauma": ["cardiac injur", "penetrating cardiac", "blunt cardiac", "cardiac contusion", "stab wound to the heart"],
 "Acyanotic Congenital Heart Disease": ["congenital coronary", "atrial septal defect", "asd", "ventricular septal defect", "vsd", "patent ductus", "pda", "atrioventricular canal", "av canal", "endocardial cushion", "coarctation", "aortopulmonary window", "vascular ring", "anomalous left coronary", "partial anomalous"],
 "Cyanotic Congenital Heart Disease": ["double-outlet", "pulmonary venous return", "tetralogy", "transposition", "hypoplastic left", "norwood", "fontan", "glenn", "truncus", "total anomalous", "tricuspid atresia", "ebstein", "pulmonary atresia", "single ventricle", "cyanotic", "blalock", "arterial switch"],
 "Perioperative Care & Complications": ["resuscitation", "cpr", "asystole", "basic life support", "sudden cardiac death", "postoperative", "after cardiac surgery", "low cardiac output", "inotrop", "bleeding after", "sternal wound", "mediastinitis", "renal failure after", "neurologic complication", "vasoplegia"],
 "Cardiac Imaging & Hemodynamics": ["echocardiograph", "catheterization", "pulmonary artery catheter", "wedge pressure", "swan-ganz", "hemodynamic", "gradient", "valve area"],
 "Pulmonary Embolism & Pulmonary Hypertension": ["pulmonary hypertension", "pulmonary embol", "thromboendarterectomy", "cteph", "pulmonary vascular resistance"],
}
for t in K:
    assert t in SP_OF, t

def classify(q, book_sp):
    text = (q["stem"] + " " + " ".join(o["text"] for o in q["options"])).lower()
    stem = q["stem"].lower()
    best, best_score = None, 0
    for t, kws in K.items():
        score = 0
        for kw in kws:
            if kw in stem:
                score += 3
            elif kw in text:
                score += 1
        if SP_OF[t] == book_sp:
            score *= 1.6
        if score > best_score:
            best, best_score = t, score
    if not best:
        best = {"thoracic": "Thoracic Techniques & Postoperative Care", "cardiac": "Perioperative Care & Complications", "vascular": "Atherosclerosis & Medical Therapy"}[book_sp]
        if "esophag" in text:
            best = "Esophageal Anatomy & Physiology"
    return best, best_score

def clean(s):
    orig = s
    s = re.sub(r"[ \t]+([.,;:?])", r"\1", s)
    s = re.sub(r"([a-z0-9)])\.([A-Z][a-z])", r"\1. \2", s)
    s = re.sub(r"[ \t]{2,}", " ", s)
    s = s.replace("cm H20", "cm H2O").replace("Polyarteritisnodosa", "Polyarteritis nodosa")
    s = s.strip()
    return s, (s != orig)


src, book_id, book_sp, out_path = sys.argv[1:5]
rows = [json.loads(l) for l in open(src, encoding="utf-8") if l.strip()]
out, todo = [], []
for r in rows:
    fixes = []
    stem, c = clean(r["stem"])
    if c: fixes.append("spacing/punctuation in stem")
    opts = []
    for o in r["options"]:
        t, c = clean(o["text"])
        if c: fixes.append("spacing/punctuation in option " + str(o["label"]).upper())
        opts.append(t)
    raw = str(r.get("answer") or "").strip()
    num = r["number"]
    qid = "%s-q%s" % (book_id, str(num).replace(".", "-") if not isinstance(num, int) else "%03d" % num)
    q = {"id": qid, "number": num, "stem": stem, "options": opts, "images": r.get("images", []),
         "keyCheck": "agree", "keyComment": None, "explanation": "", "fixes": fixes}
    if r.get("chapter"): q["chapter"] = r["chapter"]
    letters = [l.upper() for l in re.findall(r"[A-Fa-f]", raw)]
    if raw.lower() == "all of the above":
        q.update(type="multi", answer=[chr(65 + i) for i in range(len(opts))], note="Printed key 'all of the above'; stored as every option letter.")
    elif not raw or "-" in raw or any(ord(l) - 65 >= len(opts) for l in letters) or not letters:
        q.update(type="single", answer=letters, note="NEEDS DECISION: printed key " + repr(raw))
        todo.append((qid, raw, r.get("note")))
    else:
        q.update(type="multi" if len(letters) > 1 else "single", answer=letters)
    t, score = classify(r, book_sp)
    q["topic"], q["specialty"] = t, SP_OF[t]
    q["topicScore"] = score
    out.append(q)
json.dump(out, open(out_path, "w", encoding="utf-8"), ensure_ascii=False, indent=1)
print("wrote", len(out), "questions to", out_path)
print("low-confidence topics (score < 2):", sum(1 for q in out if q["topicScore"] < 2))
print("NEEDS DECISION:", len(todo))
for t in todo: print("  ", t)
