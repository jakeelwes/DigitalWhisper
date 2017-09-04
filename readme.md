## Digital Whispers
# STEPS -

Copy config.txt (enable 7" screen)
Make sure connected first - add network
```
sudo nano /etc/wpa_supplicant/wpa_supplicant.conf

networks={
  ssid=""
  psk=""
  key_mgmt=
}
```

Then do GIT run script
 ```
 sudo apt-get update
 apt-get install git
 git clone https://github.com/jakeelwes/DigitalWhisper
 git checkout rpi

 cd DigitalWhisper/
 sh script.sh
 sudo reboot

 apt-get install nodejs npm
 ln -s /usr/bin/nodejs /usr/sbin/node

 apt-get install espeak

 cd DigitalWhispers/
 npm install forever -g

 sudo reboot
 ```

 pw3m, autologin, ssh -
 ```
 sudo raspi-config
 ```
 No black out
 ```
 consoleblank=0 in /boot/cmdline.txt
 ```
 Volume up
 ```
 alsamixer
 ```
 <!-- Add keyboard for boot
 `sudo crontab -e`
 @reboot sleep 5 && /bin/echo -e 'connect A0:00:00:00:2C:F2 \n quit \n' | bluetoothctl -->
Dataplicity
 ```
 curl https://www.dataplicity.com/..........py | sudo python
 ```
