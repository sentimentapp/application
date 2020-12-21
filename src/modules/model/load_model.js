// Imports Tensorflowjs
import * as tf from '@tensorflow/tfjs'

// Stores the path to the model
// References the public webpack folder in order to serve the model over HTTP
const MODEL_PATH = 'transformer_model/model.json';

// Loads the model on startup
export async function loadModel(){

    // Loads the model
    const model = await tf.loadGraphModel(MODEL_PATH);

    // Testing 'testing'
    // Output with Python model is [ 0.41682613 0.15688562 0.39256287 0.44390798 0.7058824  0.647645 0.5898025 ]
    // Came out as [ 0.416826, 0.1568856, 0.3925629, 0.443908, 0.7058822, 0.6476451, 0.5898025 ]
    // model.predict(tf.tensor([[102, 5605]])).print();

    // Tells the code that the model has been loaded
    return model
}
