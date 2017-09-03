# MANUAL THINGS TO DO
# --- config.txt (enable 7" screen)
# --- make sure connected first - add network
# sudo nano /etc/wpa_supplicant/wpa_supplicant.conf
# --- pw3m, autologin, ssh -
# sudo raspi-config
# --- no black out
# consoleblank=0 end of /boot/cmdline.txt
# --- volume up
# alsamixer
# --- Add keyboard for boot
# sudo crontab -e
# @reboot sleep 5 && /bin/echo -e 'connect A0:00:00:00:2C:F2 \n quit \n' | bluetoothctl

sudo apt-get update
apt-get install git
apt-get install nodejs npm
ln -s /usr/bin/nodejs /usr/sbin/node
apt-get install espeak
git clone https://github.com/jakeelwes/DigitalWhisper
cd DigitalWhispers/
npm install forever -g


# Config Files

cp ~/.asoundrc ~/.asoundrcB
cp ~/.bashrc ~/.bashrcB
cp /etc/default/console-setup /etc/default/console-setupB
cp /etc/kbd/config /etc/kbd/configB
cp asoundrc ~/.asoundrc
cp bashrc ~/.bashrc
cp console-setup /etc/default/console-setup
mkdir /etc/kbd
cp kbd__-config /etc/kbd/config
mkdir /usr/lib/ladspa/
cp tap_reverb.so /usr/lib/ladspa/tap_reverb.so

sudo reboot

# sudo apt-get update
# curl https://www.dataplicity.com/..........py | sudo python
