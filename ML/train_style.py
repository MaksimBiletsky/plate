import os, pdb
os.environ['TF_CPP_MIN_LOG_LEVEL']='2'
import numpy as np, scipy.misc 
from optimize import optimize
from utils import save_img, get_img
import evaluate

CONTENT_WEIGHT = 7.5e0
STYLE_WEIGHT = 1e2
TV_WEIGHT = 2e2
LEARNING_RATE = 1e-3
NUM_EPOCHS = 1
CHECKPOINT_DIR = 'checkpoints/'
CHECKPOINT_ITERATIONS = 1500
VGG_PATH = 'data/imagenet-vgg-verydeep-19.mat'
TRAIN_PATH = 'data/train2014'
BATCH_SIZE = 20

def list_files(img_dir):
    files = []
    for (dirpath, dirnames, filenames) in os.walk(in_path):
        files.extend(filenames)
        break

    return [os.path.join(img_dir,x) for x in files]

def main(image_style_path):
    print('Style Transfer Training!')

    style_target = get_img(image_style_path)
    

    checkpoint_path = (image_style_path).split('/')[-1].split('.')[0] + '/model.ckpt'
    content_targets = _get_files(TRAIN_PATH)
    
    kwargs = {
        "epochs": NUM_EPOCHS,
        "print_iterations": CHECKPOINT_ITERATIONS,
        "batch_size": BATCH_SIZE,
        "save_path": os.path.join(CHECKPOINT_DIR, checkpoint_path),
        "learning_rate": LEARNING_RATE
    }
    
    args = [
        content_targets,
        style_target,
        CONTENT_WEIGHT,
        STYLE_WEIGHT,
        TV_WEIGHT,
        VGG_PATH
    ]

    print('Training is starting!...')

    for preds, losses, i, epoch in optimize(*args, **kwargs):
        style_loss, content_loss, tv_loss, loss = losses

        print('Epoch %d, Iteration: %d, Loss: %s' % (epoch, i, loss))
        to_print = (style_loss, content_loss, tv_loss)
        print('style: %s, content:%s, tv: %s' % to_print)
        
    print("Training complete.")
 
