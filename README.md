# Edition der Bargheer Fiedellieder

Studentisches Projekt am Musikwissenschaftlichen Seminar Detmold/Paderborn unter der Leitung von Joachim Veit. 


## Running in Edirom Online

Prerequisites: [Docker Desktop](https://www.docker.com/products/docker-desktop/) has to be installed. The 'docker' command must be available in the terminal.

**Step 1**: Clone the Git repository.

On your computer create and navigate to a new directory for the Bargheer Edirom Online. 
Then open the command line of your computer (also known as Shell, PowerShell, Terminal) and clone the Bargheer Edition Git repository to your machine with:

```bash
git clone https://github.com/Edirom/Bargheer-Edition.git .
```

&ast; If you do not use Git, it is possible to download a zip or tar archive from the [Releases](https://github.com/Edirom/Bargheer-Edition/releases), unzip the archive, and  then navigate into it.


**Step 2**: Start Edirom Online.

The Edirom Online is started via entering the following command in the command line:

```bash
docker build -t bargheer-edirom-online:latest .
docker run --name bargheer-edirom-online -p 8080:8080 -v exist-data:/var/lib/exist bargheer-edirom-online:latest
```

Alternatively start in detached mode (running in background so that the terminal is writable after startup) by using the flag " -d" after "docker run" in the command above. 

After the environment has been setup (which may take several minutes) the Bargheer Edirom Online is available at:

[http://localhost:8080/exist/apps/Edirom-Online-Frontend/index.html](http://localhost:8080/exist/apps/Edirom-Online-Frontend/index.html)

If it does not show up directly, try a reload of the page.

**Step 3**: Stop Edirom Online.

You can stop the environment by hitting Ctrl+C in the command line in which the Docker process is running. If you have used the detached mode, you can stop the environment by typing `docker stop bargheer-edirom-online`. To start the Docker container again (without building anew) type `docker start bargheer-edirom-online`.



## License

This work is available under a [Creative Commons Attribution 4.0 International License (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/)
