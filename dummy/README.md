
# How to run

1. Install mysql

2. Configurate mysql

```sh
mysql -uroot -p
# <enter password>, and <enter>
# create database moyeora;
# create user 'moyeora'@'%' identified by '1234';
# grant all privileges on moyeora.* to 'moyeora'@'%';
# quit;
```

3. Install virtualenv

4. Run main.py

```sh
virtualenv venv -p python3
source venv/bin/activate
pip install -r requirements.txt
python main.py
```