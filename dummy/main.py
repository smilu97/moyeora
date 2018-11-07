import json
import random
from faker import Faker, Factory
from faker.providers import person
from sqlalchemy import create_engine
from sqlalchemy.sql import text

db_engine = create_engine('mysql+pymysql://moyeora:1234@localhost:3306/moyeora')
conn = db_engine.connect()

with open('basesql.sql', 'r') as fd:
    for query in fd.read().split(';')[:-1]:
        conn.execute(text(query))

user_num = 200
item_num = 50
group_num = 30
offer_num = 300
req_num = 3000

def random_one(lst):
    return lst[random.randint(0, len(lst) - 1)]

def delete_white_space(s):
    r = ''
    for ch in s:
        if ch == ' ':
            continue
        r += ch
    return r

def get_names(filename='sample_network.json'):
    
    faker = Factory.create()
    faker.add_provider(person)

    return [faker.last_name() + faker.first_name() for _ in range(user_num)]

    with open(filename, 'r') as fd:
        raw = fd.read()
    
    obj = json.loads(raw)
    nodes = obj['nodes']
    names = [item['name'] for item in nodes]
    names = [delete_white_space(s) for s in names]

    return names

def get_items():

    items = ['상품{}'.format(idx) for idx in range(1, item_num + 1)]

    return items

def get_groups():

    faker = Faker('KO')

    return [delete_white_space(faker.company()) for _ in range(group_num)]

names = get_names()
items = get_items()
groups = get_groups()

random.shuffle(names)
consumers = names[:int(len(names) * 3 / 4)]
providers = names[len(consumers):]

with open('user_group.csv', 'w') as fd:
    for con in consumers:
        grp = groups[random.randint(0, group_num - 1)]
        fd.write('{},{}\n'.format(con, grp))
        sql = 'insert into user_group(username, groupname) values (:e1, :e2)'
        conn.execute(text(sql), e1=con, e2=grp)

with open('offers.csv', 'w') as fd:
    for offer_idx in range(1, offer_num + 1):
        grp = groups[random.randint(0, group_num - 1)]
        itm = items[random.randint(0, item_num - 1)]
        fd.write('{},{},{}\n'.format(offer_idx, grp, itm))
        sql = 'insert into offers(groupname, itemname) values (:e1, :e2)'
        conn.execute(text(sql), e1=grp, e2=itm)

with open('requests.csv', 'w') as fd:
    for req_idx in range(1, req_num + 1):
        offer_idx = random.randint(1, offer_num)
        provider = random_one(providers)
        cost = random.randint(1, 100) * 10000
        fd.write('{},{},{}\n'.format(offer_idx, provider, cost))
        sql = 'insert into requests(offerId, requestor, cost) values (:e1, :e2, :e3)'
        conn.execute(text(sql), e1=offer_idx, e2=provider, e3=cost)

conn.close()
