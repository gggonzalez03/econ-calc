apt-get -qqy update
apt-get -qqy install python-pip
pip install packaging
pip install appdirs
pip install plotly
pip install django
pip install djangorestframework


wget http://download.redis.io/redis-stable.tar.gz
tar xvzf redis-stable.tar.gz
cd redis-stable
make
make install 