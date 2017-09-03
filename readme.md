##Digital Whispers
#STEPS -

Copy config.txt (enable 7" screen)
Make sure connected first - add network
`sudo nano /etc/wpa_supplicant/wpa_supplicant.conf`

Then do GIT run script
 ```
 sudo apt-get update
 apt-get install git
 git clone https://github.com/jakeelwes/DigitalWhisper

 cd DigitalWhisper/
 sh script.sh

 apt-get install nodejs npm
 ln -s /usr/bin/nodejs /usr/sbin/node

 apt-get install espeak

 cd DigitalWhispers/
 npm install forever -g

 sudo reboot
 ```

 pw3m, autologin, ssh -
 `sudo raspi-config`
 No black out
 `consoleblank=0 end of /boot/cmdline.txt`
 Volume up
 `alsamixer`
 <!-- Add keyboard for boot
 `sudo crontab -e`
 @reboot sleep 5 && /bin/echo -e 'connect A0:00:00:00:2C:F2 \n quit \n' | bluetoothctl -->
Dataplicity
 `curl https://www.dataplicity.com/..........py | sudo python`
