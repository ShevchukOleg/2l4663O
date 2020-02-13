import { Component,  OnInit} from '@angular/core';
import { Message } from './interfaces/messegeInterface';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{

  messages: Array<Message> = [
    {
      author: 'Самуил',
      date: '13 октября 2011',
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

  // Reactive form declaration
  reactiveForm: FormGroup;

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      message: new FormControl('', [Validators.required])
    });
  }

  onMessageSending() {
    const curentTime = new Date();
    const newMessage: Message = {
      author: 'Your profile name',
      date: curentTime.toLocaleString('ru', {year: 'numeric', month: 'long', day: 'numeric'}).slice(0, -3),
      messageText: `${this.reactiveForm.get('message').value}`
    };
    this.messages.push(newMessage);
    this.reactiveForm.reset();
  }
}
