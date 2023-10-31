import os, subprocess, sys
from colorama import Fore, init
from pick import pick
from pathlib import Path

init(autoreset=True)

if not (driver_path := Path(os.getenv('USERPROFILE')) / '.screwbill' / 'msedgedriver.exe').is_file():
    browser_path = r'C:\Program Files\Microsoft\Edge\Application\msedge.exe'
    
    if not browser_path or not Path(browser_path).is_file():
        print(f"{Fore.RED}You don't have Microsoft Edge. Cool!")
    else:
        options = [f"Install Microsoft Edge driver", "Quit"]
        selected_option, _ = pick(options, title="Install msedgedriver", indicator="=> ")
        
        if selected_option == "Install Microsoft Edge driver":
            download_url = "https://github.com/SevenworksDev/Screwbill/raw/main/msedgedriver.exe"
            print(f"{Fore.GREEN}downloading msedgedriver...")
            subprocess.run(["curl", "--insecure", "-Lo", driver_path, download_url])
            print(f"{Fore.GREEN}msedgedriver installed!")
else:
    sys.exit()