# Import date class from datetime module
from datetime import datetime
L = []
with open('a1.csv','r') as f1:
    for line in f1.readlines():
        if line != ',,\n' and '@' in line and ',,' not in line: 
            L.append(line)

with open('a2.csv','r') as f2:
    for line in f2.readlines():
        if line != ',,\n' and '@' in line and ',,' not in line:
            L.append(line)

with open('attrib.csv','w') as F:
    F.write(f'mail,committee,attrib {datetime.now()}\n')
    for line in L: F.write(line)