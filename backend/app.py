import tensorflow as tf
import numpy as np
import tensorflow as tf
import numpy
import tensorflow_hub as hub
import typing
from typing import Any, Tuple

import tensorflow_text as tf_text

import matplotlib.pyplot as plt
import matplotlib.ticker as ticker
def predict(text):
    output_text = ''
    
    reloaded = tf.saved_model.load('translator')
    input_text = tf.constant([text,])
    result = reloaded.tf_translate(input_text)
 
    

    for tr in result['text']:
        print(tr.numpy().decode())
        


while(True):
    text = input('Enter text: ')
    output_text = predict(text)
    print(output_text)
