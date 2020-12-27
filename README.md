<p align="center">
    <img src="https://github.com/sentimentapp/application/raw/master/src/assets/logo.png" width="400"/>
<p>
<br>

## What is Sentiment?
Sentiment is journaling app that uses machine learning to classify the emotions of its entries to help the user track their mental state. Created by a group of students interning with the [C4G program at the Colorado Schools of Mines](https://cstart.mines.edu/c4g/), Sentiment was created in the hopes that it could help its user to more activily manage their emotions. Though the internship is officialy over, this project is still in development.

## Resources
- [Application Slide Deck](https://docs.google.com/presentation/d/1n-H6MCLJjlm7aM9_NGkeRTPwSmjQ_3sKZacZwBd-jmQ/edit?usp=sharing)

### UI/UX Design
- [UI/UX Mockup](https://www.figma.com/file/vII04Xd1Q8r208ztIRiuIK/Sentiment-Mockup?node-id=0%3A1)
- <img src="https://cdn.dribbble.com/users/3477380/screenshots/12611484/media/80f345127276e287290981257176b0d6.jpg?compress=1&resize=1600x1200" width="256"/>
- <img src="https://cdn.dribbble.com/users/3477380/screenshots/14806829/media/18d20083ee8fc5414c68687f2422c24c.png?compress=1&resize=1600x1200" width="256"/>


### Application
- [Working Application Video](https://youtu.be/Po-BH-1kRBw)
    - Note: The application shown in this video has the [BERT Transformer](https://github.com/sentimentapp/core/tree/main/transformer) model integrated rather than the project's original [CNN-LSTM](https://github.com/sentimentapp/core/tree/main/cnn-lstm). The model being used in this video is not necessarily the app's final model because it was primarily created for learning and experimentation purposes. It is also important to note that the journal entry examples used in this video were cherry-picked to make sure the demo showed correct classification. In reality, the model being used in the video was only able to achieve a measly 46% accuracy on the validation dataset due to issues with the data that it was trained on.

### ML Models
- [Repository with Different Experimental Models](https://github.com/sentimentapp/core)
    - [CNN-LSTM](https://github.com/sentimentapp/core/tree/main/cnn-lstm)
    - [BERT Transformer](https://github.com/sentimentapp/core/tree/main/transformer)
