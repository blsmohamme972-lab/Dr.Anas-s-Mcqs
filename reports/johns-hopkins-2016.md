# Report — Johns Hopkins – Cardiothoracic Surgery Board Review

For AI agents and editors who maintain this book. Not shown in the app.

- Data file: `data/questions/johns-hopkins-2016.json`
- Questions in the app: 422

## Book-level notes

- Not yet medically reviewed: no explanations; answer keys are as in the source; topics were assigned by keywords and then a manual pass over every question stem, and should be confirmed during medical review.
- This is a mixed cardiothoracic book: questions are filed under cardiac, thoracic or (a few) vascular topics according to what each stem tests; the book's own specialty is set to cardiac only for the cover colour.
- Questions are numbered chapter.question with the book's own chapter numbers (1–90); chapters 58, 59, 61, 81 and 86 are not in the source document. Chapter titles in the app start with the book's chapter number so that, for example, 47.3 is in '47. Pericardial Disease'.
- The file name says 450 Q; the source contains 422 questions (84 chapters × 5, chapter 73 has 4, chapter 80 has 3). None were removed.
- Q89.2 is a True/False item in the source; it is shown with two options, A. True and B. False, and the key is the printed answer ('True' → A).
- The source is itself a retyped/OCR'd document with typing errors; clear typos were corrected (listed below), uncertain ones were left as printed.

## Questions with answer or content notes

### Q3.1 (`johns-hopkins-2016-q3-1`)
- Answer in the app: E
- Decision: Editor flag for medical review: Option D has a garbled/NUL character before 'C02' (probably 'PaCO2'); verify and fix 'C02' to 'CO2'.

### Q5.4 (`johns-hopkins-2016-q5-4`)
- Answer in the app: A
- Decision: Editor flag for medical review: Option C says IgA; ABPA criterion is total IgE >1000 ng/mL - possible source error, verify.

### Q12.5 (`johns-hopkins-2016-q12-5`)
- Answer in the app: E
- Decision: Editor flag for medical review: Option E 'every 6 to 2 months' - probably '6 to 12 months'; verify.

### Q20.4 (`johns-hopkins-2016-q20-4`)
- Answer in the app: A
- Decision: Editor flag for medical review: Option E 'patients with have' - missing/extra word (probably 'patients will have').

### Q25.2 (`johns-hopkins-2016-q25-2`)
- Answer in the app: B
- Decision: Editor flag for medical review: Option C 'Can only be used in anticipated arrest time' - probably 'if'.

### Q35.1 (`johns-hopkins-2016-q35-1`)
- Answer in the app: C
- Decision: Editor flag for medical review: Option A 'severe MR, and posterior on echocardiography' - word missing (e.g. 'posterior leaflet prolapse').

### Q39.1 (`johns-hopkins-2016-q39-1`)
- Answer in the app: B
- Decision: Editor flag for medical review: Option B 'in MS' probably means MFS (Marfan); verify.

### Q41.1 (`johns-hopkins-2016-q41-1`)
- Answer in the app: C
- Decision: Editor flag for medical review: Key C (Stanford A + DeBakey III) is wrong: ascending involvement = DeBakey I/II; option A looks correct. Verify key.

### Q44.2 (`johns-hopkins-2016-q44-2`)
- Answer in the app: C
- Decision: Editor flag for medical review: Option E 'Alternating LBBB and LBBB' - probably 'RBBB and LBBB'.

### Q45.4 (`johns-hopkins-2016-q45-4`)
- Answer in the app: D
- Decision: Editor flag for medical review: Stem PVR unit 'dyne/s/cm2•' garbled (usually dyn·s/cm5); verify.

### Q55.5 (`johns-hopkins-2016-q55-5`)
- Answer in the app: E
- Decision: Editor flag for medical review: Options B/C 'Q/Q,' is garbled (Qp/Qs); fix manually.

### Q56.1 (`johns-hopkins-2016-q56-1`)
- Answer in the app: D
- Decision: Editor flag for medical review: Options A and E contain a lost symbol (NUL char) before 40/10 - probably '≥40' and '<10'; fix manually.

### Q56.2 (`johns-hopkins-2016-q56-2`)
- Answer in the app: B
- Decision: Editor flag for medical review: 'PV' in B, D, E probably lost subscript 'a' (PVa = atrial reversal); 'PV.' has stray period.

### Q72.2 (`johns-hopkins-2016-q72-2`)
- Answer in the app: D
- Decision: Editor flag for medical review: Option C 'type IC' is not a Collett-Edwards type - likely garbled; verify.

### Q82.2 (`johns-hopkins-2016-q82-2`)
- Answer in the app: D
- Decision: Editor flag for medical review: Option E 'more than 1 5 mm/year' - unclear value (1.5? 5? 15?); verify.

### Q82.3 (`johns-hopkins-2016-q82-3`)
- Answer in the app: E
- Decision: Editor flag for medical review: Option B 'growth rate 1 2 mm' - unclear (1-2? 12?); verify.

### Q82.5 (`johns-hopkins-2016-q82-5`)
- Answer in the app: A
- Decision: Editor flag for medical review: Stem 'after operative for' garbled (probably 'after operation'); option C is an incomplete sentence (missing 'is').

### Q85.2 (`johns-hopkins-2016-q85-2`)
- Answer in the app: B
- Decision: Editor flag for medical review: Exact duplicate of Q80.2 (subdivided atrium) placed in the Ebstein chapter.

### Q88.2 (`johns-hopkins-2016-q88-2`)
- Answer in the app: A
- Decision: Editor flag for medical review: Stem repeats 'post-op day #2' twice ('...now post-op day #2') - redundant text.


## Typo and format fixes

- Q1.1: typo 'alow' -> 'a low' in option A
- Q1.2: typo 'FEV 1' -> 'FEV1' in option A; typo 'FEV 1' -> 'FEV1' in option B; typo 'D Lco' -> 'DLco' in option C
- Q2.1: typo 'highspeed' -> 'high-speed' in stem; typo 'rightsided' -> 'right-sided' in stem; typo 'r egarding' -> 'regarding' in stem; typo 'in t he' -> 'in the' in option B; typo 'y oung' -> 'young' in option E
- Q2.2: typo 'An 1 8-year-old' -> 'An 18-year-old' in option A; typo 't o the' -> 'to the' in option B; typo '23 -year-old' -> '23-year-old' in option C; typo 'A 1 6-year-old' -> 'A 16-year-old' in option E; typo 'a fter' -> 'after' in option E
- Q2.5: typo 'An 1 8 -year-old' -> 'An 18-year-old' in stem
- Q3.1: typo 'FEV 1' -> 'FEV1' in option A; typo '\x00C02 greater' -> 'PaCO2 greater' in option D
- Q3.3: typo 'Station 41' -> 'Station 4L' in option D
- Q4.2: typo '7 em' -> '7 cm' in option E; spacing/punctuation
- Q4.3: spacing/punctuation
- Q4.5: typo 'p ressure' -> 'pressure' in option E; spacing/punctuation
- Q5.3: typo 'LOfgren' -> 'Löfgren' in option C
- Q5.4: typo '1 000' -> '1000' in option C
- Q5.5: typo 'arniodarone' -> 'amiodarone' in stem; typo 'toxicitiy' -> 'toxicity' in stem
- Q6.1: typo '>4 em' -> '>4 cm' in option A
- Q7.3: typo 'FEV,' -> 'FEV1' in option A; typo 'FEV,' -> 'FEV1' in option B; typo 'FEV,' -> 'FEV1' in option C; typo 'FEV,' -> 'FEV1' in option D
- Q8.2: typo '45-year old' -> '45-year-old' in stem; typo '4 em from' -> '4 cm from' in stem; typo 'pericardia!' -> 'pericardial' in option B
- Q8.4: typo 'well s aturated' -> 'well saturated' in stem
- Q8.5: typo 'Pericardia!' -> 'Pericardial' in option E
- Q9.2: typo 'ill-defmed' -> 'ill-defined' in option D
- Q9.4: typo "7'h" -> '7th' in stem; typo 'Tl tumor' -> 'T1 tumor' in option B; typo 'IliA' -> 'IIIA' in option B; typo '4 em' -> '4 cm' in option C; typo 'N l disease' -> 'N1 disease' in option D; typo 'T 4 tumor' -> 'T4 tumor' in option E; typo 'liB' -> 'IIB' in option E
- Q9.5: typo 'Diespierre' -> 'Depierre' in option B
- Q11.5: typo '= 1 R' -> '= 1R' in option C
- Q12.2: typo '1 2 reflux' -> '12 reflux' in stem
- Q12.5: typo 'Which is of the following' -> 'Which of the following' in stem
- Q13.1: typo 'i s correct' -> 'is correct' in stem
- Q13.3: typo 'overtime' -> 'over time' in option C
- Q14.1: typo 'a peristalsis' -> 'aperistalsis' in option B; typo '> 1 5 mm' -> '> 15 mm' in option E
- Q14.2: typo 's econdary' -> 'secondary' in option C
- Q14.3: typo 'Intra-abdorninal' -> 'Intra-abdominal' in option B
- Q15.3: typo 'fmding' -> 'finding' in option C
- Q16.1: typo 'N-nitrosarnines' -> 'N-nitrosamines' in option B
- Q16.3: typo 'Tl tumors' -> 'T1 tumors' in option C
- Q16.4: typo 'r equire' -> 'require' in option D
- Q17.4: typo 'Nonserninomatous' -> 'Nonseminomatous' in option B; typo 'P-hCG' -> 'β-hCG' in option E
- Q17.5: typo 'maj ority' -> 'majority' in option E
- Q18.1: typo 'T l -weighted' -> 'T1-weighted' in option B
- Q18.2: typo 'An l l -year-old' -> 'An 11-year-old' in stem
- Q19.2: typo 'trisomy 1 8' -> 'trisomy 18' in option A; spacing/punctuation
- Q20.1: typo 'visceral pleural is' -> 'visceral pleura is' in option C
- Q20.4: typo 'in t he' -> 'in the' in option C; typo 'p leural' -> 'pleural' in option E
- Q20.5: typo '1 500' -> '1500' in option C
- Q21.1: typo '1 0,000' -> '10,000' in option C
- Q24.5: typo 'CO 2' -> 'CO2' in option D; typo 'rnicroembolization' -> 'microembolization' in option E
- Q25.5: typo '1 00 mm Hg' -> '100 mm Hg' in option D
- Q26.1: typo 'An 87 -year-old' -> 'An 87-year-old' in stem; typo '2. 1 and' -> '2.1 and' in stem; typo 'respectively: His' -> 'respectively. His' in stem; spacing/punctuation
- Q26.2: typo 'septalmyectomy' -> 'septal myectomy' in stem; typo '1 80' -> '180' in stem; typo '1 00 bpm' -> '100 bpm' in option B; typo 'Add \x00-blocker' -> 'Add β-blocker' in option C; typo '0.3 J..Lg/kg/min' -> '0.3 μg/kg/min' in option E; spacing/punctuation
- Q26.3: typo 'of t he' -> 'of the' in stem; typo 'C0 2 Retention' -> 'CO2 retention' in option B; typo '1 00 pack-year' -> '100 pack-year' in option D
- Q26.4: typo '0. 1 5 )..lg/ kg· min' -> '0.15 μg/kg·min' in stem; typo 'dobutarnine' -> 'dobutamine' in option C; spacing/punctuation
- Q26.5: typo 't he patient' -> 'the patient' in option B; typo 'as s oon' -> 'as soon' in option C; typo 'a nd eating' -> 'and eating' in option E
- Q27.3: typo '1 0-year' -> '10-year' in option A
- Q27.5: typo 'e vidence' -> 'evidence' in option A
- Q29.5: typo 'p rior' -> 'prior' in stem; typo 'Dobutarnine' -> 'Dobutamine' in option C
- Q30.1: typo 'p erioperative' -> 'perioperative' in option A; typo 'a rtery' -> 'artery' in option A; typo 't he risk' -> 'the risk' in option E
- Q31.3: spacing/punctuation
- Q31.4: typo 'demonstates' -> 'demonstrates' in stem; typo 'pericardia!' -> 'pericardial' in stem; typo 's eptum' -> 'septum' in stem; typo '1 20' -> '120' in stem; typo 'of 1 2.' -> 'of 12.' in stem; spacing/punctuation
- Q32.1: typo '1. 5 times' -> '1.5 times' in option A; typo '1 2th' -> '12th' in option B; typo 'glycosarninoglycans' -> 'glycosaminoglycans' in option E; spacing/punctuation
- Q33.3: typo '\x00-Blockers' -> 'β-Blockers' in option C
- Q33.4: typo '5.5 em' -> '5.5 cm' in option A; typo '5.0 em' -> '5.0 cm' in option B; typo '4.5 em' -> '4.5 cm' in option C; typo '4.0 em' -> '4.0 cm' in option D
- Q34.2: typo 'Type Ilia' -> 'Type IIIa' in option D
- Q34.5: typo 'd ysfunction' -> 'dysfunction' in option B
- Q35.1: typo 'M V replacement i s' -> 'MV replacement is' in stem; typo '1. 5 em' -> '1.5 cm' in option B; typo '3 -vessel' -> '3-vessel' in option D; spacing/punctuation
- Q35.2: typo 's evere' -> 'severe' in option A; typo 's evere' -> 'severe' in option D
- Q35.3: typo 'a rtery' -> 'artery' in stem
- Q35.5: typo 'a nticoagulation' -> 'anticoagulation' in option A
- Q37.2: typo '>0.7 em' -> '>0.7 cm' in option A; typo 's eptal' -> 'septal' in option C
- Q37.3: typo 'mm Hg4.' -> 'mm Hg.' in option E
- Q37.4: typo 'PDA.What' -> 'PDA. What' in stem
- Q37.5: typo 'ofTS' -> 'of TS' in option A
- Q39.1: typo 'dis orders' -> 'disorders' in stem; typo 'COLA3 1' -> 'COL3A1' in option D
- Q39.2: typo 'Fibrillin - 1' -> 'Fibrillin-1' in option E; spacing/punctuation
- Q39.4: typo '4 em' -> '4 cm' in option C; typo '4.5 em' -> '4.5 cm' in option E
- Q40.1: typo 't horacoabdominal' -> 'thoracoabdominal' in stem; typo 'celiac artery:' -> 'celiac artery.' in option B
- Q40.2: typo 'right –sided' -> 'right-sided' in option A; typo 'L l' -> 'L1' in option A; typo 'i n 5 0 percent' -> 'in 50 percent' in option B; typo 'a neurysm' -> 'aneurysm' in option C
- Q41.4: typo 't han S cm' -> 'than 5 cm' in option B; typo 't han S cm' -> 'than 5 cm' in option C
- Q41.5: typo '\x00 -Blocker' -> 'β-Blocker' in option D
- Q42.5: typo 't horacic en do graft' -> 'thoracic endograft' in stem
- Q44.1: typo '-90 m V' -> '-90 mV' in option A; typo 'A VNs' -> 'AVNs' in option E
- Q44.3: typo '(lCD)' -> '(ICD)' in option C
- Q44.4: typo 'l CD' -> 'ICD' in stem; typo '1 6 months' -> '16 months' in stem
- Q44.5: typo 'lCD' -> 'ICD' in option A; typo 'echo cardiogram' -> 'echocardiogram' in option A
- Q45.4: typo 'with s evere' -> 'with severe' in stem; typo 's econdary' -> 'secondary' in stem; typo 't herapy' -> 'therapy' in option B; typo 't herapy' -> 'therapy' in option C
- Q46.2: typo 'fmdings' -> 'findings' in stem
- Q46.4: typo 'of t he' -> 'of the' in stem
- Q47.5: typo 'pulmonary artery:' -> 'pulmonary artery.' in option E
- Q48.2: typo 'A 1 0-year-old' -> 'A 10-year-old' in stem; typo 'in t he same' -> 'in the same' in stem; typo 'with \x00-blockers' -> 'with β-blockers' in option A
- Q48.3: typo 'left a trial' -> 'left atrial' in stem; typo 'a \x00-blocker' -> 'a β-blocker' in option D
- Q49.1: typo 'o rgan' -> 'organ' in option E
- Q49.2: typo '(COX ! )' -> '(COX-1)' in option C; typo 'C l q' -> 'C1q' in option D; typo 'TLRl' -> 'TLR1' in option E
- Q49.3: typo 'r ejection' -> 'rejection' in stem; typo '(BO)' -> '(B0)' in stem; spacing/punctuation
- Q49.4: typo '( l R)' -> '(1R)' in stem; typo '(AMRO)' -> '(AMR0)' in stem
- Q51.1: typo 'deflllitive' -> 'definitive' in option A; typo '(bridge to bridge' -> '(bridge to bridge)' in option E
- Q51.2: typo 'circulatory. support' -> 'circulatory support?' in stem
- Q51.5: typo 'devicespecific' -> 'device-specific' in stem
- Q52.2: typo '> 1 20 mL/m2' -> '> 120 mL/m2' in option B
- Q53.1: typo '1 00,000' -> '100,000' in option A; typo '1 0,000,000' -> '10,000,000' in option D
- Q53.3: typo 'L VEF' -> 'LVEF' in stem; typo 'BM C-therapy' -> 'BMC therapy' in stem; typo '1 2 h' -> '12 h' in option A
- Q54.3: typo 'MID CAB' -> 'MIDCAB' in option A; typo 'MID CAB' -> 'MIDCAB' in option C
- Q54.4: typo 'cross-damp' -> 'cross-clamp' in option B
- Q55.1: typo 'i s true' -> 'is true' in stem; typo 't hreshold' -> 'threshold' in option A; typo '1 00 rems' -> '100 rems' in option E
- Q55.2: typo 'Which if the' -> 'Which of the' in stem; typo 's een' -> 'seen' in option A; typo 't h e LAO' -> 'the LAO' in option D; spacing/punctuation
- Q55.3: typo 'valvulopasty' -> 'valvuloplasty' in stem; typo 's evere' -> 'severe' in option A
- Q55.4: typo '\x00-Blockers' -> 'β-Blockers' in option D
- Q55.5: typo '> 1. 5: 1' -> '> 1.5:1' in option B; typo '>1.5: 1' -> '>1.5:1' in option C; spacing/punctuation
- Q56.1: typo 'Normal \x0040' -> 'Normal ≥40' in option A; typo 'Akinetic \x0010' -> 'Akinetic <10' in option E
- Q56.2: typo 'Puhnonary' -> 'Pulmonary' in option C; typo 'greater t han' -> 'greater than' in option E
- Q56.3: typo 'fmding' -> 'finding' in stem; typo '4.5 em' -> '4.5 cm' in option E
- Q56.5: typo 'an normal' -> 'a normal' in stem; typo 'fining' -> 'finding' in stem; typo 'j et' -> 'jet' in option B; typo '2. 0 em' -> '2.0 cm' in option B; spacing/punctuation
- Q57.1: typo 's car' -> 'scar' in option D
- Q60.1: typo 'cross-damp' -> 'cross-clamp' in option E; typo 'r isk' -> 'risk' in option E
- Q60.3: typo 'P A pressures' -> 'PA pressures' in option D
- Q60.5: typo 'I CU' -> 'ICU' in stem
- Q62.1: typo '3.5 -mm' -> '3.5-mm' in option A
- Q62.2: typo 'S wiss-cheese' -> 'Swiss-cheese' in stem; typo '1 2 mm' -> '12 mm' in option B; typo '1 5 mm' -> '15 mm' in option C
- Q62.4: typo 'Type la' -> 'Type Ia' in stem
- Q63.1: typo 'incorporatedinto' -> 'incorporated into' in option D
- Q64.2: typo 'Q:Q will rarely exceed p s 2: 1' -> 'Qp:Qs will rarely exceed 2:1' in option B; spacing/punctuation
- Q65.1: typo 'b irth' -> 'birth' in option B; typo 'and\\ radiographic' -> 'and radiographic' in option E
- Q65.2: typo 'i t is' -> 'it is' in option A
- Q65.5: typo 'a n enlarged' -> 'an enlarged' in stem; typo 'the? following' -> 'the following' in stem; typo 'fmding on echocardiography' -> 'finding on echocardiography?' in stem; spacing/punctuation
- Q66.1: typo 'AV j unction' -> 'AV junction' in option B; typo 'membranous.septum' -> 'membranous septum.' in option D; spacing/punctuation
- Q66.2: typo 'in t he same' -> 'in the same' in option C; typo 'has t he' -> 'has the' in option E
- Q66.5: typo '5 to 1 0 percent' -> '5 to 10 percent' in option A
- Q67.1: typo 'fust year' -> 'first year' in option E
- Q67.2: typo 'well-defmed' -> 'well-defined' in option D
- Q67.3: typo 'synillome' -> 'syndrome' in option A
- Q68.2: typo 'PGE,' -> 'PGE1' in option A; spacing/punctuation
- Q68.3: typo '1 -month-old' -> '1-month-old' in stem; typo 'of \x00-blocker' -> 'of β-blocker' in option D
- Q69.4: typo 'pericardia!' -> 'pericardial' in option C
- Q69.5: typo 'MAP CAs' -> 'MAPCAs' in stem; typo '1 0 percent' -> '10 percent' in option E
- Q70.1: typo 'a b etter' -> 'a better' in option D
- Q70.3: typo 'o n the' -> 'on the' in option A; typo 'a s everely' -> 'a severely' in option C
- Q70.4: typo 'systemicpulmonary' -> 'systemic-pulmonary' in option B
- Q70.5: typo 't here' -> 'there' in option A
- Q71.2: typo 'Taussig- Bing' -> 'Taussig-Bing' in option C; typo 'subpulrnonic' -> 'subpulmonic' in option D; typo 'a nd' -> 'and' in option E; spacing/punctuation
- Q71.4: typo 'subpulrnonary' -> 'subpulmonary' in option C; typo 'c losure' -> 'closure' in option E
- Q71.5: typo '1 0 to 15' -> '10 to 15' in option A
- Q72.1: typo '22ql l' -> '22q11' in option B
- Q72.2: typo 'ofleft-' -> 'of left-' in option B
- Q73.1: typo '1 0 to 1 5 percent' -> '10 to 15 percent' in option A
- Q73.2: typo 'a nd' -> 'and' in option A; typo 'p resent' -> 'present' in option C
- Q74.1: typo 'D -looping' -> 'D-looping' in option B
- Q74.2: typo 'D- TGA' -> 'D-TGA' in option C; typo 'PGE,.' -> 'PGE1.' in option C; typo 'D- TGA/IVS' -> 'D-TGA/IVS' in option D; typo 'D -TGA' -> 'D-TGA' in option E; spacing/punctuation
- Q74.3: typo 'D- TGA' -> 'D-TGA' in option A
- Q75.5: typo 'r epair' -> 'repair' in stem; typo 'intra cardiac' -> 'intracardiac' in option B
- Q76.2: typo 'i s correct' -> 'is correct' in stem
- Q76.3: typo 'j ust' -> 'just' in option C; typo 'Sarro shunt' -> 'Sano shunt' in option D
- Q76.4: typo 'ex:tracardiac' -> 'extracardiac' in option C
- Q78.1: typo '1 6-year-old' -> '16-year-old' in stem; typo '1 1 0 kg' -> '110 kg' in stem
- Q78.2: typo 'trans catheter' -> 'transcatheter' in option A; spacing/punctuation
- Q78.3: typo 'a nd' -> 'and' in option D
- Q78.4: typo 'cross-damp' -> 'cross-clamp' in option C
- Q78.5: typo 'A 1 00-kg 1 8-year-old' -> 'A 100-kg 18-year-old' in stem; typo '1 9-mm' -> '19-mm' in option A; typo 's eparate' -> 'separate' in option A; typo '2 1 -mm' -> '21-mm' in option D
- Q79.1: typo 's eptal' -> 'septal' in option C; typo 'Taussig- Bing' -> 'Taussig-Bing' in option D
- Q79.3: typo 'a r isk' -> 'a risk' in option D
- Q79.4: typo 'q 1 1' -> 'q11' in option A
- Q79.5: typo 'iAA' -> 'IAA' in stem
- Q80.3: typo 'the. atrial' -> 'the atrial' in option A; typo 'RVOT. obstruction' -> 'RVOT obstruction' in option D; spacing/punctuation
- Q82.1: typo 'TGF-\x00' -> 'TGF-β' in option D
- Q82.2: typo 'ofMarfan' -> 'of Marfan' in stem; typo '4 em' -> '4 cm' in option D
- Q82.3: typo '5 em' -> '5 cm' in option A; typo 'Eight-year old' -> 'Eight-year-old' in option E
- Q83.3: typo 'g enerally' -> 'generally' in option E
- Q84.2: typo 'usuallypresentwith' -> 'usually present with' in option A; typo 't he first' -> 'the first' in option C
- Q84.3: typo 'a nd' -> 'and' in option D
- Q84.5: typo 'r ings' -> 'rings' in option D
- Q85.4: typo 's eptal' -> 'septal' in option C
- Q87.5: typo '48h' -> '48 h' in option C
- Q88.1: typo 't o 82' -> 'to 82' in stem; typo 'Fro 2' -> 'FiO2' in stem; typo 'Temporarliy' -> 'Temporarily' in option A; typo 'Fro 2 to 1 00 percent' -> 'FiO2 to 100 percent' in option A; spacing/punctuation
- Q88.2: typo 'A 1 4-year-old' -> 'A 14-year-old' in stem; typo '1 25,000' -> '125,000' in stem
- Q88.3: typo 'Heartrnate' -> 'Heartmate' in option A
- Q88.4: typo 'LVA D' -> 'LVAD' in stem; typo '4-year- old' -> '4-year-old' in stem; spacing/punctuation
- Q89.4: typo 'e arly' -> 'early' in option C; typo 'CA V' -> 'CAV' in option C; typo 'A 1 4-year-old' -> 'A 14-year-old' in option D; typo 'RossKonno' -> 'Ross-Konno' in option D
- Q89.5: typo 'Gl phase' -> 'G1 phase' in option A
