import sys

import numpy as np, os
import scipy.misc
import tensorflow.compat.v1 as tf
from utils import save_img, get_img
import transform


tf.disable_v2_behavior()

def transform_image(data_in, paths_out, model_dir, device_t='/cpu:0', batch_size=4):

    img_shape = get_img(data_in[0]).shape

    g = tf.Graph()
    batch_size = min(len(paths_out), batch_size)
    curr_num = 0
    soft_config = tf.ConfigProto(allow_soft_placement=True)
    soft_config.gpu_options.allow_growth = True
    with g.as_default(), g.device(device_t), \
            tf.Session(config=soft_config) as sess:
        batch_shape = (batch_size,) + img_shape
        img_placeholder = tf.placeholder(tf.float32, shape=batch_shape,
                                         name='img_placeholder')

        preds = transform.net(img_placeholder)
        saver = tf.train.Saver()

        ckpt = tf.train.get_checkpoint_state(model_dir)
        saver.restore(sess, ckpt.model_checkpoint_path)

        X = np.zeros(batch_shape, dtype=np.float32)
        img = get_img(data_in[-1])
        X[0] = img

        _preds = sess.run(preds, feed_dict={img_placeholder:X})
        
        save_img(paths_out[-1], _preds[0])

def set_style(model_path, image_path, out_path='transfered_images/'):
    out_name = os.path.basename(model_path) + '-' + os.path.basename(image_path)
    out_path = os.path.join(out_path, out_name)

    transform_image([image_path], [out_path], model_path)