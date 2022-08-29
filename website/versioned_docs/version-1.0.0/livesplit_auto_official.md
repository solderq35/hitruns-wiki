---
title: Livesplit Autosplitter (Official Servers)
description: Autosplitter (Official Servers Only). Beware of inaccuracies.
---

[Video Tutorial](https://youtu.be/81oA4RHAQug)- If you prefer video to text tutorial.

**May be out of date / no longer working on latest game version.**

## Specifications: 

**For a number of reasons explained below, please install the [Peacock Autosplitter](https://www.speedrun.com/hitman_3/guide/vamms) if you have the option to do so. It is more accurate, although it does require installing [Peacock](https://thepeacockproject.org/wiki/intel/) as well.**

* Does not split between levels automatically although a running total of the in game time is maintained. The use of the term "autosplitter" below is just due to convenience.

* Keep a running total of the in-game time from each level.

* Timer will be paused when in loading screens, inventory, planning screen in between levels, and during intro/ exit cutscenes. 

* Will not work correctly from the Outside Start of Romania (Untouchable).

* Only works on Epic Games version of Hitman 3

* Works on official servers. Technically it works on Peacock, but it may be buggier, plus Peacock has its own autosplitter.

* This autosplitter is not 100% accurate, this tool is just to get a decent estimate of your final in game time. Runs will be retimed by moderators as necessary.**

## Installation
Download Livesplit [here](https://livesplit.org/downloads/)

Download the hitman3.asl code from here: https://github.com/sandro-h/hitman3_asl

Unzip the folder of the Livesplit Download, and then click on the Livesplit Application to start. Unzip the hitman3.asl file from its folder as well.

Right click on main Livesplit application window, go to "Edit Splits". Here you can enter information about the game name, category, and splits for each map to your liking. Be sure to select the "Game Time" option. Enter your estimated in game time splits for each map in "segment time" column. 

![Segment Time](https://i.ibb.co/TrJWrq5/splitsedit.png)

Click "okay", then right click the main Livesplit application window and click on "save splits as" to save the splits for later use.

Right click on main Livesplit application window, and go to "Edit Layout". Click on the "+" symbol, then go to "Control", then "Scriptable Autosplitter". Double click on "Scriptable Autosplitter", then "browse", and select the hitman3.asl file you downloaded earlier.

![Layout](https://i.ibb.co/Mn4qC8w/editlayout.png)

Click "okay", then right click the main Livesplit application window and click on "save layout as" to save the splits for later use.

Right click on main Livesplit application window, and go to "Compare Against", then "Game Time". 

Right click on main Livesplit application window, and go to "Settings", and adjust hotkeys as needed. "Numpad 1" (have Num Lock on) is the default for starting and splitting. 

## Usage Instructions

Start game. Press Numpad 1 (default binding). The livesplit timer should turn green, but still be set as 0.

Start the first level; the timer should start after first level's initial cutscene is ended. 

You can press numpad 1 again to move the split to the next level (Sapienza). (this is what is meant by, the script does not actually autosplit). If you don't press numpad 1 again, the in game time will be kept track of accurately as you move to the next level, but it will stay on Paris or whatever your first level is.

Press numpad 3 (default value) to reset timer. Remember to press numpad 1 again and wait for timer to turn green to start again if you want to go again.

Final disclaimer: Timer may not be 100% accurate, use rating screen + on screen in game timer to retime as necessary later