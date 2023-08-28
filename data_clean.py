#!/usr/bin/env python
# coding: utf-8

# In[11]:


import pandas as pd
from better_profanity import profanity


# In[12]:


profanity.load_censor_words()

def is_clean(domain):
    return not profanity.contains_profanity(domain)


# In[13]:


df1 = pd.read_csv('csv/dropcatch.csv', skiprows=1)
df2 = pd.read_csv('csv/godaddy.csv')
df3 = pd.read_csv('csv/preorderstarting1.csv', skiprows=1)


# In[14]:


df1 = df1.rename(columns={'Domain': 'Domain Name'})
df2 = df2.rename(columns={'Auction end time': 'Auction End'})
df3 = df3.rename(columns={'Domain name': 'Domain Name'})


# In[15]:


combined_df = pd.concat([df1, df2, df3], ignore_index=True)


# In[16]:


combined_df = combined_df.drop_duplicates(subset=['Domain Name', 'Auction End'], keep='last')


# In[17]:


combined_df = combined_df.fillna('null')


# In[18]:


combined_df['is_clean'] = combined_df['Domain Name'].apply(is_clean)
filtered_df = combined_df[combined_df['is_clean']]


# In[19]:


filter_out_list = ['words tp filter']


# In[36]:


filtered_df = filtered_df[~filtered_df['Domain Name'].str.lower().apply(lambda x: any(word in x for word in filter_out_list))]


# In[37]:


filtered_df.to_csv('domains.csv', index=False)


# In[38]:


filtered_df.iloc[21]


# In[ ]:




