# Aquarii-FE-G1-14-07-22

- Daca nu aveti proiectul Aquarii-FE-G1-14-07-22 pe calculatorul vostru local, rulati comanda:

```git clone git@github.com:SkillBrain-com/Aquarii-FE-G1-14-07-22.git```

Creearea unui branch nou pentru o tema.
- Primul pas e sa va asigurati ca sunteti pe branch-ul ```main``` al proiectului
- Rulati ```git pull origin main``` ca sa obtineti ultima versiune a proiectului
- ```git checkout -b <numele branchului>```
- Exemplu: ```git checkout -b SM-TM-a9842```

Fiecare student are un folder al lui in care gasiti un folder numit ```teme```. Toate temele ar trebuii sa fie create aici.

Exemplu de structura a folderelor:
   - EricPuskas
      - teme
        - 3.4.js-functii
          - index.html
          - script.js
          - style.css
          
   - Va rog sa nu creati foldere cu spatiu in nume, si sa aveti o denumire consistenta a tuturor temelor.
   
Daca aveti proiecte care nu fac parte dintr-o tema, puteti creea un folder numit ```projects``` la acelasi nivel cu folderul ```teme``` si in acest folder sa va puneti proiectele.

Exemplu:
   - EricPuskas
      - teme
      - projects
        - speech-processing-app
          - index.html
          - script.js
          - style.css
          
          
  Dupa ce ati terminat de scris tema. 
   - ```git add .``` - Pregatim fisierele pentru commit
   - ```git commit -m "Eric Puskas - 3.4.js-functii"```
   - ```git push origin SM-TM-a9842```  - Atentie, in loc de SM-TM-a9842, voi pune-ti branch-ul taskului vostru, acesta se regaseste in Notion.
   - Intrati pe github la proiect si puteti face un pull request, ma mentionati ca reviewer si puteti cere si altor colegi sa se uite peste.
   - Odata ce codul e aprobat, puteti face merge in ```main```
   
   
 
   ## Comenzi de terminal:
   1. Change directory
   - Comanda: ```cd```
   - Exemplu: ```cd EricPuskas```
   - Explicatie: Daca ma aflu in folderul proiectului ```Aquarii-FE-G1-14-07-22``` si rulez aceasta comanda, va schimba directory-ul in care lucram, la ```Aquarii-FE-G1-14-07-22/EricPuskas```

  - Comanda: ```cd ..```
  - Explicatie: Mergem in sus cu un folder. Daca ma aflu in ```Aquarii-FE-G1-14-07-22/EricPuskas``` si rulez aceasta comanda, va schimba directory-ul in care lucram, la ```Aquarii-FE-G1-14-07-22```

  2. Listing directory
  - Comanda: ```ls```
  - Folosita pentru a afisa continutul folderului in care suntem in terminal.

  3. Create a file
  - Comanda: ```touch```
  - Exemplu: ```touch index.html```
  - Explicatie: Se va creea un fisier nou index.html in folderul in care suntem in terminal

  4. Create a directory
  - Comanda: ```mkdir```
  - Exemplu: ```mkdir projects```
  - Explicatie: Se va creea un folder nou numit projects in folderul in care suntem in terminal
  
  5. Remove nested directories
  - Comanda: ```rm -rf```
  - Exemplu: ```rm -rf EricPuskas```
  - Explicatie: Se va sterge folderul EricPuskas, cu toate foldere si fisiere incluse in acest folder.

Mai multe comenzi si informatii suplimentare: https://www.techrepublic.com/article/16-terminal-commands-every-user-should-know/


