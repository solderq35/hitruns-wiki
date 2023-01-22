---
title: Downpatching
description: Information on downpatching Hitman 3
---

# Hitman 3 Downpatching

## Purpose and Disclaimer

- The purpose of this is to explain how to downpatch Hitman 3 on Steam / Epic
- Downpatching can allow you to experience unique patched game mechanics otherwise no longer available, as detailed in the [table below](#manifest-download-table--specific-patch-findings)
- **This downpatching guide is not an endorsement of a downpatched category on speedrun.com for Hitman 3**.
  - Whether downpatching _should_ be used for Hitman 3 speedruns is a complex topic, and we will avoid making any hasty decisions here.
    - For instance, downpatching could split the Hitman 3 speedrun playerbase even further (we arguably already have too many categories), it will lock out console players, etc.
  - For the time being, this document exists purely for spreading awareness on how to downpatch, and to promote preservation of older game versions.
- The manifest files listed below will require you to legally own the game in some capacity (more on this [here](#game-ownership--dlcs)). Piracy is not condoned.
- There's no way IOI can ban you for downpatching, considering they don't ban actual cheaters on the in-game leaderboards
- There does not seem to be any long-term consequence of downpatching, but there's a lot about this topic not yet understood; proceed at your own risk and consider backing up important game files or mods (mods in your install folder may be wiped after a downpatch)

## Video Walkthrough (Epic)

- https://www.youtube.com/watch?v=4Uzx9CJf-uk
  - Credits: [Tinosaurus](https://github.com/Tinosaurus)
- Currently we only have a video walkthrough for Epic, as the process is a lot more complicated for Epic. We may make a Steam video tutorial sometime in the future.

## General Command Line Stuff / Prereqs

- Just know the very basics
- Right click folder in Windows Explorer > Copy address as text
  - [Screenshot for Reference](https://media.discordapp.net/attachments/1018323831468851202/1066671125892976690/image.png?width=901&height=670)
- Type `cd <DIRECTORY_ADDRESS>` into your command line / terminal to navigate to that directory in the command line
  - `<ALLCAPS>` in the below documentation should be understood as a stand-in value for your actual credentials / files, please substitute with the correct capitalization, and without angled brackets unless otherwise indicated.
- Right click to paste into terminal / command line
- If for some reason a directory has a space in it (e.g. `C:\Program Files...`), then please surround it with single quotes for any command line arugments, e.g. `cd 'C:\Program Files...'`, or it won't work

## OS

- This should work on Windows as well as Linux using Wine / Steam Proton (there is no native Linux version for Hitman 3)
- As a bit of trivia, most Legendary users are on Linux, presumably with Wine for Epic

## Install Instructions

### Epic (Legendary)

**Setup**

- Legendary is essentially a modded game launcher for Epic that will allow you to downpatch
- Install Legendary from here: https://github.com/derrod/legendary/releases/latest (just download `legendary.exe` if on Windows)
- See this document on more information on how to install Hitman 3 with Legendary specifically: https://rentry.org/H3Legendary
- General Legendary documentation: https://github.com/derrod/legendary/blob/master/README.md
- Before proceeding further, open the official Epic Games Launcher, click profile picture in upper right, then go to Settings > Manage Games > Uncheck "Allow Auto Updates". Otherwise, the game will update itself to the latest version automatically again if you ever open the Epic Games launcher later for any reason.
  - [Screenshot for Reference](https://media.discordapp.net/attachments/1018323831468851202/1066669559291052112/image.png?width=1255&height=670)

**Downpatch Instructions**

- For the next steps, refer to the [table below](#manifest-download-table--specific-patch-findings) for specific patch manifests. Download the manifest you want.
- In Terminal / Command Line, navigate to the directory from where you installed `legendary.exe` with `cd <INSTALL_LOCATION>`
- Run the following commands. All of the following except `legendary launch` should only have to be completed once per downpatch:
  - `legendary auth`
  - `legendary install Eider --manifest <WHERE_YOU_INSTALLED_MANIFEST>`
    - EXAMPLE INPUT (with my filepath): `legendary install Eider --manifest C:\Users\Legion\Downloads\Eider_Windows_6041891.manifest`
    - `Eider` is a "code name" so to speak for Hitman 3 in Epic / Legendary
    - If you get asked if you want to install offline or if you want to install DLC's, say yes.
    - You might get 403 errors on the download; the Epic / Legendary servers aren't very stable for downloading. Either wait it out,
      or hit `Ctrl C` to cancel the download and try again.
  - `legendary verify Eider`
  - `legendary repair Eider`
    - The two commands above of `verify` and `repair` are needed because often times, at least a few downloaded files will be corrupted. Your game will not launch if files are corrupted, so you should verify and repair always after installing the downpatch files.
  - `legendary launch Eider --skip-version-check`
    - The `--skip-version-check` argument is needed on a downpatched game, or it won't launch.
    - NOTE: You can ONLY use legendary to launch the downpatched version on Epic. The official Epic Games Launcher won't let you launch the game when downpatched!

### Steam

**Setup**

- Install Steam DepotDownloader from here: https://github.com/SteamRE/DepotDownloader/releases/latest (just download the zip and unzip it)
  - Check their README for general Steam DepotDownloader documentation: https://github.com/SteamRE/DepotDownloader/blob/master/README.md
- You may need the latest version of dotnet, especially if you use an older version of Visual Studio for programming.
  - Install here: https://dotnet.microsoft.com/en-us/download
- Before proceeding further, right click Hitman 3 in your Steam Library > Properties > Updates > Only update this game when I launch it
  - This will prevent Steam from trying to auto-update the game (in theory)
  - [Screenshot for Reference](https://media.discordapp.net/attachments/1018323831468851202/1066670572257415199/image.png?width=968&height=670)

**Downpatch Instructions**

- For the next steps, head to [SteamDB](https://steamdb.info/depot/1659041/manifests/) to check the manifest ID's, or refer to the [table below](#manifest-download-table--specific-patch-findings).
  - Note that since Steam Hitman 3 was released January 2022, you can't downpatch to 2021 on Steam.
- In Terminal / Command Line, navigate to the directory from where you installed Steam DepotDownloader with `cd <INSTALL_LOCATION>`
- Run the following instructions:
- `ddotnet DepotDownloader.dll -app 1847520 -depot <DEPOT_ID> -manifest <MANIFEST_ID> -user <STEAM_USER_ID> -pass <STEAM_PASSWORD> -dir <INSTALLDIR>`
  - EXAMPLE INPUT: `dotnet DepotDownloader.dll -app 1847520 -depot 1659041 -manifest 1587269672222714171 -user steamusernamehere -pass passwordhere -dir 'C:\Program Files (x86)\Steam\steamapps\common\HITMAN 3'`
- `dotnet DepotDownloader.dll -app 1847520 -depot <DEPOT_ID> -manifest <MANIFEST_ID> -user <STEAM_USER_ID> -pass <STEAM_PASSWORD> -dir <INSTALLDIR> -validate`
  - Running "validate" afterwards ensures that no files were corrupted while being downloaded
- Alternatively, if you want to keep your downpatch files separate / maintain a backup, you can leave out the `dir <INSTALLDIR>` argument and copy over the files manually.
- Unlike with Epic, you can launch the downpatched game as normal through the official Steam client as you normally would.

## Game Ownership / DLC's

- Both Steam Depot Downloader and Legendary require you to own the game on Steam or Epic respectively to download the required files.
  - Note that the free Steam Demo of Hitman 3 lets you download all the patch files, although you may not be able to do much with them, as explained below.
- The manifest files provided / linked require you to own the game on Steam / Epic to play the game with. Piracy is not condoned.
- In general, any edition of Hitman 3 actually has you install all the game files, buying DLC just unlocks access. No matter what DLC you own, downpatching will similarly give you all game files. But you might not be able to play all of it if you don't own access to them.
- The downpatched files from Steam and Epic are mostly but not completely compatible with each other. Any files ending with `.exe` are cross-platform. However, the `Launcher.exe` and `Hitman3.exe` will only work on the platform they are designed for.
  - Due to an inability to get earlier versions of the `.exe` files from Steam Depot Downloader, Steam Hitman 3 is probably locked onto versions of January 2022 or later.

## Miscellaneous Useful Info

- "Downpatching" Hitman 3 with the following methods is not true downpatching like you will see in other games.
  - The game server will remain the current version, which can cause some strange interactions (more on this later).
  - Technically you can use an older game version along with an older version of [Peacock](https://thepeacockproject.org/wiki/intel/what-is-peacock/), but this would mainly just help you avoid some visual bugs. Also some older versions of Peacock are not archived publicly.
  - Generally speaking the current game server is fine for our purposes.
- You wouldn't think it, but you can connect to the current server version on downpatched version of Hitman 3, even up to launch patch (January 2021). This currently is true with both official servers latest version as well as Peacock latest version.
  - Note the UI bugs with the first couple patches as noted in the [table below](#manifest-download-table--specific-patch-findings)
- Some items or missions from later patches are available on earlier patches. Here are some general guidelines regarding compatibility (non-exhaustive list, do not take as universal truths)
  - A suit / item with messed up name but with a thumbnail (insert screenshot later) will work if equipped.
    - In general, a missing thumbnail indicates that an item is unusable on that patch. If you equip it, it will not show up in inventory after you are loaded in (for item), or you will not be wearing it (for suit).
  - A mission (main mission, contract, escalation, etc) will work even if the thumbnail is gone and name is messed up.
    - However, a mission that says "Get Access" will not work
  - In general, some items are internally introduced to the game's servers before they officially become available in a patch. In a downpatched game state, you can access some items earlier than you should be able to (with fully working thumbnails and normal item name).
    - For instance, Molotov can be accessed in the downpatch state as far back as January 2022 (with non-glitched UI / thumbnail), although it was only introduced to the game officially in July 2022.
    - Because of this, while the official game patch notes / roadmaps are a good guideline for when an item would be available, it is not 100% correct.
  - In general, you can unlock items on an older patch. As long as the mission / item involved are playable (following guidelines above), it should work. Even if the item has messed up name and the challenge name UI is also messed up, it will unlock. When you return to current patch, you will retain that unlock you completed on old patch.
  - You will not lose progress, mastery, or challenge completion by downpatching, in general.
    - Exception: Some items / missions will unplayable, or simply not there on older patches. In this case, your new patch unlocks won't carry over. See guidelines above.

## Manifest Download Table / Specific Patch Findings

- Refer [here](h3_patch_notes#list-of-patches) for more general information on some patches that specifically affected Hitman 3 speedruns.
- Refer [here](https://github.com/solderq35/hitman-3-downpatch#actual-readme-aka-how-to-edit-this-doc) for advice on editing the Markdown table below.

| Manifest Name / Download                                                                                                                                                    | Release Date         | Game Version                                 | Official Patch Notes                                                                                     | Patch Note Commentary                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------- | -------------------------------------------- | -------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Eider 4446006](https://github.com/solderq35/hitman-3-downpatch/blob/main/src/Eider_Windows_4446006.manifest?raw=true) (Epic)                                               | 20-Jan-2021          | 3.10.0                                       |                                                                                                          | - First Patch<br></br>- [Prompts UI is messed up](https://youtu.be/IIOtVc7FwqU) (ON DOWNPATCHED VERSION, it was fine back in the day)<br></br>  - (Fixed February 2021)                                                                                                                                                                                                                                                                                   |
| [Eider 4466613](https://github.com/solderq35/hitman-3-downpatch/blob/main/src/Eider_Windows_4466613.manifest?raw=true) (Epic)                                               | 21-Jan-2021          | 3.10.0 (OBS Hotfix - Assumed version number) |                                                                                                          | - First Patch variant<br></br>- [Prompts UI is messed up](https://youtu.be/IIOtVc7FwqU) (ON DOWNPATCHED VERSION, it was fine back in the day)<br></br>  - (Fixed February 2021)                                                                                                                                                                                                                                                                           |
| [Eider 4472392](https://github.com/solderq35/hitman-3-downpatch/blob/main/src/Eider_Windows_4472392.manifest?raw=true) (Epic)                                               | 23-Jan-2021          | 3.10.0 (Another hotfix?)                     |                                                                                                          | - First Patch variant<br></br>- [Prompts UI is messed up](https://youtu.be/IIOtVc7FwqU) (ON DOWNPATCHED VERSION, it was fine back in the day)<br></br>  - (Fixed February 2021)                                                                                                                                                                                                                                                                           |
| [Eider 4564176](https://github.com/solderq35/hitman-3-downpatch/blob/main/src/Eider_Windows_4564176.manifest?raw=true) (Epic)                                               | 23-Feb-2021          | 3.11.0                                       | [https://www.ioi.dk/hitman-3-february-patch-3-11/](https://www.ioi.dk/hitman-3-february-patch-3-11/)     | - [Removed Druzhina wallbang](https://www.youtube.com/watch?v=bo_vPd7cN80)<br></br>- [Removed Train OOB](https://youtu.be/hGr-ekdRMxA?t=26)<br></br>- [Removed Berlin Manhole Exit](https://youtu.be/yA83Ip4-jHg?t=213)<br></br>- [Removed a Chongqing Vault Skip](https://youtu.be/T-swLeD-vtY?t=60)<br></br>- Weird downpatch prompt issue fixed                                                                                                        |
| [Eider 4635444](https://github.com/solderq35/hitman-3-downpatch/blob/main/src/Eider_Windows_4635444.manifest?raw=true) (Epic)                                               | 30-Mar-2021          | 3.20.0                                       | [https://www.ioi.dk/hitman-3-march-patch-3-20/](https://www.ioi.dk/hitman-3-march-patch-3-20/)           |                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| [Eider 4685799](https://github.com/solderq35/hitman-3-downpatch/blob/main/src/Eider_Windows_4685799.manifest?raw=true) (Epic)                                               | 6-Apr-2021           | 3.20.0                                       | [https://www.ioi.dk/patch-notes-hitman3/](https://www.ioi.dk/patch-notes-hitman3/)                       | - Check "April 6 - PC Only" in official patch notes. Fixed a frame rate issue.                                                                                                                                                                                                                                                                                                                                                                            |
| [Eider 4763566](https://github.com/solderq35/hitman-3-downpatch/blob/main/src/Eider_Windows_4763566.manifest?raw=true) (Epic)                                               | 10-May-2021          | 3.30.0                                       | [https://www.ioi.dk/hitman-3-may-patch-3-30/](https://www.ioi.dk/hitman-3-may-patch-3-30/)               | - [Emetic Patch](https://www.youtube.com/watch?v=zk4kBSXJf8c) (sick NPC throw up elsewhere) <br></br>- [Legal Sniper Accident](https://www.youtube.com/watch?v=Y0NZZN0VkFQ) in Mendoza (Gaucho Start) patched in Mendoza. Also some lighting fixes.                                                                                                                                                                                                       |
| [Eider 4879673](https://github.com/solderq35/hitman-3-downpatch/blob/main/src/Eider_Windows_4879673.manifest?raw=true) (Epic)                                               | 15-Jun-2021          | 3.40.0                                       | [https://www.ioi.dk/hitman-3-june-patch-3-40/](https://www.ioi.dk/hitman-3-june-patch-3-40/)             |                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| [Eider 4916414](https://github.com/solderq35/hitman-3-downpatch/blob/main/src/Eider_Windows_4916414.manifest?raw=true) (Epic)                                               | 23-Jun-2021          | 3.40.0                                       | [https://www.ioi.dk/patch-notes-hitman3/](https://www.ioi.dk/patch-notes-hitman3/)                       | - Check "June 21 - PC Only" in official patch notes. Fixed an issue with Epic Overlay                                                                                                                                                                                                                                                                                                                                                                     |
| [Eider 5010755](https://github.com/solderq35/hitman-3-downpatch/blob/main/src/Eider_Windows_5010755.manifest?raw=true) (Epic)                                               | 27-Jul-2021          | 3.50.0                                       | [https://www.ioi.dk/hitman-3-july-patch-3-50/](https://www.ioi.dk/hitman-3-july-patch-3-50/)             | - Added Dartmoor game show                                                                                                                                                                                                                                                                                                                                                                                                                                |
| [Eider 5086890](https://github.com/solderq35/hitman-3-downpatch/blob/main/src/Eider_Windows_5086890.manifest?raw=true) (Epic)                                               | 31-Aug-2021          | 3.50.0                                       | [https://www.ioi.dk/patch-notes-hitman3/](https://www.ioi.dk/patch-notes-hitman3/)                       | - Check "August 31 - PC Only" in official patch notes. Fixed an issue where players experienced FPS drops/ stuttering after the 3.50 (July) patch.                                                                                                                                                                                                                                                                                                        |
| [Eider 5191698](https://github.com/solderq35/hitman-3-downpatch/blob/main/src/Eider_Windows_5191698.manifest?raw=true) (Epic)                                               | 28-Sep-2021          | 3.70.0                                       | [https://www.ioi.dk/hitman-3-september-patch-3-70/](https://www.ioi.dk/hitman-3-september-patch-3-70/)   | - Added back shoulder swap <br></br>- Tweaked sniper slowdown to be more responsive                                                                                                                                                                                                                                                                                                                                                                       |
| [Eider 5220846](https://github.com/solderq35/hitman-3-downpatch/blob/main/src/Eider_Windows_5220846.manifest?raw=true) (Epic)                                               | 1-Oct-2021           | 3.70.0                                       | [https://www.ioi.dk/patch-notes-hitman3/](https://www.ioi.dk/patch-notes-hitman3/)                       | - Check "October 1 - PC Only" in official patch notes. Fixed "No “Woosh” sound on PC.                                                                                                                                                                                                                                                                                                                                                                     |
| [Eider 5259620](https://github.com/solderq35/hitman-3-downpatch/blob/main/src/Eider_Windows_5259620.manifest?raw=true) (Epic)                                               | 26-Oct-2021          | 3.70.0                                       |                                                                                                          |                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| [Eider 5527099](https://github.com/solderq35/hitman-3-downpatch/blob/main/src/Eider_Windows_5527099.manifest?raw=true) (Epic) <br></br><br></br>3902189938284110581 (Steam) | 20-Jan-2022          | 3.100                                        | [https://www.ioi.dk/hitman-3-year-2-patch-notes/](https://www.ioi.dk/hitman-3-year-2-patch-notes/)       | - Year 2 Patch. <br></br>- [Removed Dartmoor SA 37 chandy wallbang](https://www.youtube.com/watch?v=77QUS3sY0EQ)<br></br>- [Messed up sliding doors](https://youtu.be/9rqI3jBgoFM?t=19s)<br></br>- First patch available to Steam users.<br></br>- First patch Molotov seems to be available.                                                                                                                                                             |
| [Eider 5540627](https://github.com/solderq35/hitman-3-downpatch/blob/main/src/Eider_Windows_5540627.manifest?raw=true) (Epic) <br></br><br></br>3616963494886024195 (Steam) | 21-Jan-2022          | 3.100                                        | [https://www.ioi.dk/hitman-3-year-2-patch-notes/](https://www.ioi.dk/hitman-3-year-2-patch-notes/)       | - Year 2 variant.                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| [Eider 5561401](https://github.com/solderq35/hitman-3-downpatch/blob/main/src/Eider_Windows_5561401.manifest?raw=true) (Epic) <br></br><br></br>8924469489751784366 (Steam) | 31-Jan-2022 (Maybe)  | 3.100                                        | [https://www.ioi.dk/hitman-3-year-2-patch-notes/](https://www.ioi.dk/hitman-3-year-2-patch-notes/)       | - Year 2 variant.<br></br>- No extra cameras in Master difficulty Dubai yet.<br></br>- [May 19th according to featured contract thumbnails](https://www.hitmanforum.com/t/year-2-may-official-community-rubber-duck-featured-contracts/14702)                                                                                                                                                                                                             |
| [Eider 5898594](https://github.com/solderq35/hitman-3-downpatch/blob/main/src/Eider_Windows_5898594.manifest?raw=true) (Epic) <br></br><br></br>2244167751737065138 (Steam) | 24-May-2022 or later | 3.110                                        | [https://www.ioi.dk/hitman-3-year-2-may-patch-notes](https://www.ioi.dk/hitman-3-year-2-may-patch-notes) | - [S3 Master Cameras Patch](https://www.youtube.com/watch?v=GJcN8RMhOxo&t=24s)<br></br>- [Added invisible floor to Mendoza sliding roof](https://youtu.be/v2LsiANC3NY)<br></br>- Most recent ET Arcade dates to 2022-Jul-14                                                                                                                                                                                                                               |
| [Eider 5915918](https://github.com/solderq35/hitman-3-downpatch/blob/main/src/Eider_Windows_5898594.manifest?raw=true) (Epic)                                               | 24-May-2022 or later | 3.110                                        | [https://www.ioi.dk/hitman-3-year-2-may-patch-notes](https://www.ioi.dk/hitman-3-year-2-may-patch-notes) | - [S3 Master Cameras Patch](https://www.youtube.com/watch?v=GJcN8RMhOxo&t=24s)<br></br>- [Added invisible floor to Mendoza sliding roof](https://youtu.be/v2LsiANC3NY)<br></br>- Most recent ET Arcade dates to 2022-Jul-14                                                                                                                                                                                                                               |
| [Eider 6041891](https://github.com/solderq35/hitman-3-downpatch/blob/main/src/Eider_Windows_6041891.manifest?raw=true) (Epic) <br></br><br></br>1587269672222714171 (Steam) | 26-Jul-2022          | 3.120                                        | [https://www.ioi.dk/hitman-3-july-patch-notes/](https://www.ioi.dk/hitman-3-july-patch-notes/)           | - Added Molotov.<br></br>- Technically not the only patch with Molly playable<br></br>- Fixed (some) Haven viewcone wallhacks                                                                                                                                                                                                                                                                                                                             |
| [Eider 6239328](https://github.com/solderq35/hitman-3-downpatch/blob/main/src/Eider_Windows_6239328.manifest?raw=true) (Epic) <br></br><br></br>182129136748469362 (Steam)  | 6-Oct-2022           | 3.130                                        | [https://www.ioi.dk/hitman-3-october-patch-notes/](https://www.ioi.dk/hitman-3-october-patch-notes/)     | - [Removed molly accident / wallbang](https://youtu.be/eXTd8ZC3ftA)<br></br>- [Changed NY frisk](https://youtu.be/y2GuYwNMy5k?t=18)<br></br>  - Check the [new Frisk skip](https://hitruns-wiki.vercel.app/docs/fullgame_tutorials#meta-strategies-overview)<br></br>- Changed Dartmoor ledge drop<br></br>  - Check the [new Dartmoor Ledge Drop](https://youtu.be/RIlDbIci-bs?t=46)<br></br>- Removed [RFID exploit](https://youtu.be/fyPVfSPQSb4?t=96) |

## Acknowledgements

- Thank you [Notex](https://github.com/notexe) for sharing the Legendary manifest files (Legendary manifests are only generated if you played the game on that patch, so you would have to have played the game on every patch on Legendary since launch to have them all otherwise), and also giving valuable advice on this topic
- Thanks you [Tinosaurus](https://github.com/Tinosaurus) for troubleshooting this process with me as well, and creating a video tutorial for Epic / Legendary downpatching
- Thank you [Legendary](https://github.com/derrod/legendary) and [Steam Depot Downloader](https://github.com/SteamRE/DepotDownloader) once again for making this possible
