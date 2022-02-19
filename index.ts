// Import stylesheets
import { Person } from './person';
import './style.css';

let pessoa = new Person('Gabriel', 'Almeida', 'Abrahao', 22);

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>Exibição de Nome e Aniversário</h1>
<div>${pessoa.getFullName()}</div>
<div>${pessoa.getBirthdayYear()}</div>
`;
