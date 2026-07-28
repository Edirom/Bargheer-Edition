# Edition der Bargheer Fiedellieder

Die Edition der Fiedellieder von Carl Louis Bargheer basiert auf einem studentischen Projekt, das am Musikwissenschaftlichen Seminar Detmold/Paderborn unter der Leitung von Joachim Veit durchgeführt wurde. 

Die Edition enthält einerseits Informationen zu den Fiedelliedern, die der Kapellmeister, Komponist und Violinist Carl Louis Bargheer (1831–1902) nach Textvorlagen von Theodor Storm (1817–1888) komponierte. Integriert ist eine vollständige digitale Edition dieser Lieder einschließlich eines ausführlichen Kritischen Berichts, der auch die komplizierte Genese bzw. den Überarbeitungsprozess dieser Lieder im Detail verdeutlichen will. 

Darüber hinaus werden zahlreiche Informationen und Dokumente bereitgestellt, die über den engeren Gegenstand dieser Fiedellieder hinausgehen und Bargheers Biographie, aber auch seine Rolle im Musikleben, speziell seine Zeit in der Detmolder Hofkapelle und die Kontakte zu Johannes Brahms, beleuchten. Dabei sind in erster Linie Briefe und Archivalien, aber auch bildliche Zeugnisse aufgenommen. Die Mehrzahl dieser Dokumente stammt aus der Lippischen Landesbibliothek Detmold und dem Landesarchiv NRW, Abteilung Ostwestfalen-Lippe und wurden im Zuge der Edition erstmals veröffentlicht.

Im Folgenden finden sich Informationen zum Installieren der Edition in der Präsentations- und Analysesoftware Edirom Online.


## In Edirom Online ausführen

Voraussetzungen: [Docker Desktop](https://www.docker.com/products/docker-desktop/) muss installiert sein. Der Befehl "docker" muss im Terminal verfügbar sein.


**Schritt 1**: Klonen des Git-Repository.

Erstellen Sie auf Ihrem Computer ein neues Verzeichnis für die Bargheer Edirom Online und wechseln Sie in das Verzeichnis. 
Öffnen Sie anschließend die Befehlszeile Ihres Computers (auch bekannt als Shell, PowerShell oder Terminal) und klonen Sie das Git-Repository der Bargheer-Edition mit folgendem Befehl auf Ihren Rechner:

```bash
git clone https://github.com/Edirom/Bargheer-Edition.git .
```

&ast; Wenn Sie Git nicht verwenden, können Sie ein ZIP- oder TAR-Archiv von der Seite [Releases](https://github.com/Edirom/Bargheer-Edition/releases) herunterladen, das Archiv entpacken und anschließend in das Verzeichnis wechseln.


**Schritt 2**: Starten der Edirom Online.

Edirom Online wird durch Eingabe der folgenden Befehle in der Befehlszeile gestartet.

(a) Docker-Container erstellen:

```bash
docker build -t bargheer-edirom-online:latest .
```

(b) Docker-Container ausführen:

```bash
docker run --name bargheer-edirom-online -p 8080:8080 -v exist-data:/var/lib/exist bargheer-edirom-online:latest
```

Alternativ können Sie im "detached mode" starten (der Prozess läuft dann im Hintergrund, sodass das Terminal nach dem Start wieder beschreibbar ist), indem Sie im obigen Befehl die Flag "-d" hinter "docker run" verwenden. 

Nachdem die Umgebung eingerichtet wurde (was einige Minuten dauern kann), ist die Bargheer Edition in der Edirom Online unter folgender Adresse verfügbar:

[http://localhost:8080/](http://localhost:8080/)

Falls die Seite nicht sofort angezeigt wird, laden Sie sie bitte neu.


**Schritt 3**: Beenden der Edirom Online.

Sie können die Umgebung beenden, indem Sie in der Befehlszeile, in der der Docker-Prozess läuft, Strg+C drücken. 

Wenn Sie den Detached-Modus verwendet haben, können Sie die Umgebung mit folgendem Befehl beenden:

```bash
docker stop bargheer-edirom-online
``` 

Um den Docker-Container erneut zu starten (ohne ihn neu zu erstellen), geben Sie Folgendes ein:

```bash
docker start bargheer-edirom-online
```


## Lizenz

Dieses Projekt ist verfügbar unter der [Creative Commons Attribution 4.0 International License (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/)
