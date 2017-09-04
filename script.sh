


# Config Files

# (reverb etc)
cp ~/.asoundrc ~/.asoundrcB

# (start program)
cp ~/.bashrc ~/.bashrcB

# (font)
cp /etc/default/console-setup /etc/default/console-setupB

# (stop screen blanking
cp /etc/kbd/config /etc/kbd/configB

cp conf/asoundrc ~/.asoundrc
cp conf/bashrc ~/.bashrc
cp conf/console-setup /etc/default/console-setup
mkdir /etc/kbd
cp cont/kbd__-config /etc/kbd/config
mkdir /usr/lib/ladspa/
# reverb
cp conf/tap_reverb.so /usr/lib/ladspa/tap_reverb.so
