import openai
from transformers import pipeline
from sklearn.metrics.pairwise import cosine_similarity
from sklearn.feature_extraction.text import TfidfVectorizer
import numpy as np
from sentence_transformers import SentenceTransformer

openai.api_key = ""

def get_embedding(text_to_embed):
    
    response = openai.Embedding.create(
        model="text-embedding-ada-002",
        input=[text_to_embed]
    )
    return response.data[0].embedding


def calculate_relevance_with_model(query, summary):
    model = SentenceTransformer('sentence-transformers/all-MiniLM-L6-v2')
    
    #x = get_embedding(query)
    #y = get_embedding(summary)

    embeddings = model.encode([query, summary])
    
    cosine_sim = cosine_similarity([embeddings[0]], [embeddings[1]])
    relevance_percentage = cosine_sim[0][0] * 100
    return relevance_percentage
