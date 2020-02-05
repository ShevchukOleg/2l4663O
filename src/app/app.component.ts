import { Component } from '@angular/core';
import { Message } from './interfaces/messegeInterface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  messages: Array<Message> = [
    {
      author: 'Самуил',
      date: '13 октября',
      messageText: 'Привет, Верунь! ниче себе ты крутая. фотка класс!!!! '
    },
    {
      author: 'Лилия Семёновна  ',
      date: '14 октября 2011',
      messageText: 'Вероника, здравствуйте! Есть такой вопрос: Особый вид куниц жизненно стабилизирует кинетический момент, это и есть всемирно известный центр огранки алмазов и торговли бриллиантами?'
    },
    {
      author: 'Лилия Семёновна',
      date: '14 октября 2011',
      messageText: 'Вероника, здравствуйте! Есть такой вопрос: Особый вид куниц жизненно стабилизирует кинетический момент?'
    }
  ];
}
