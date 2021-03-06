import _ from 'lodash'
import './style.css'
import Icon from './1.png'
import data from './data.xml'
function component () {
    var element = document.createElement('div')

    // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
    element.innerHTML = _.join(['hello', 'webpack'], ' ')
    element.classList.add('hello')
    var myIcon = new Image();
    myIcon.src = Icon;

    element.appendChild(myIcon);
    console.log(data);
    return element
}

document.body.appendChild(component())