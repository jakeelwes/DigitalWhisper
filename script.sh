# make sure connected first - add network
# sudo nano /etc/wpa_supplicant/wpa_supplicant.conf

apt-get install git
apt-get install nodejs npm
ln -s /usr/bin/nodejs /usr/sbin/node
apt-get install espeak
git clone https://github.com/jakeelwes/DigitalWhisper
cd DigitalWhispers/


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
