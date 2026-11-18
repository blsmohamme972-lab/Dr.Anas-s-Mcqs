import re, sys, json, subprocess, codecs
def fetch(url):
    return subprocess.run(['curl','-sS','-L',url],capture_output=True).stdout.decode('utf-8','ignore')
def listing(fid):
    s=fetch('https://drive.google.com/drive/folders/'+fid)
    m=re.search(r"window\['_DRIVE_ivd'\] = '(.*?)';",s,re.S)
    if not m: return []
    raw=codecs.decode(m.group(1).replace('\\/','/'),'unicode_escape')
    data=json.loads(raw)
    out=[]
    for e in data[0] or []:
        out.append({'id':e[0],'name':e[2],'mime':e[3],'size':e[13] if len(e)>13 else None})
    return out
def walk(fid,path=''):
    res=[]
    for e in listing(fid):
        p=path+'/'+e['name']
        if e['mime'].endswith('folder'):
            res.append({**e,'path':p})
            res+=walk(e['id'],p)
        else:
            res.append({**e,'path':p})
    return res
if __name__=='__main__':
    r=walk(sys.argv[1])
    json.dump(r,open(sys.argv[2],'w'),indent=1)
    for e in r: print(e['mime'].split('.')[-1][:12].ljust(12), e['path'], e['id'])
