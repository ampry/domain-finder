#!/usr/bin/env python
# coding: utf-8

import pandas as pd
from better_profanity import profanity

profanity.load_censor_words()

def is_clean(domain):
    return not profanity.contains_profanity(domain)

df1 = pd.read_csv('csv/dropcatch.csv', skiprows=1)
df2 = pd.read_csv('csv/godaddy.csv')
df3 = pd.read_csv('csv/preorderstarting1.csv', skiprows=1)


df1 = df1.rename(columns={'Domain': 'Domain Name'})
df2 = df2.rename(columns={'Auction end time': 'Auction End'})
df3 = df3.rename(columns={'Domain name': 'Domain Name'})

combined_df = pd.concat([df1, df2, df3], ignore_index=True)

combined_df = combined_df.drop_duplicates(subset=['Domain Name', 'Auction End'], keep='last')

combined_df = combined_df.fillna('null')

combined_df['is_clean'] = combined_df['Domain Name'].apply(is_clean)
filtered_df = combined_df[combined_df['is_clean']]

filtered_df.to_csv('domains.csv', index=False)
