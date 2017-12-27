import { Component, OnInit } from '@angular/core';
import * as _ from "lodash";

@Component({
  selector: 'app-componente-lodash',
  templateUrl: './componente-lodash.component.html',
  styleUrls: ['./componente-lodash.component.css']
})
export class ComponenteLodashComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var datos = [{
        "owner": "Colin",
        "pets": [{"name":"dog1"}, {"name": "dog2"}]
    }, {
        "owner": "John",
        "pets": [{"name":"dog3"}, {"name": "dog4"}]
    }];

    var datos2=[];
    //numero aleatorio
    console.log('Número Aleatorio entre 2 valores: ' + _.random(1,100));

    //bucle
    _.times(5, function(index){
      console.log('a'+index);
    });

    // Create an array of length 6 and populate them with unique values. The value must be prefix with "ball_".
    // eg. [ball_0, ball_1, ball_2, ball_3, ball_4, ball_5]
    var k=_.times(6, _.uniqueId.bind(null, 'ball_'));
    console.log(k);

    k=_.times(6, _.partial(_.uniqueId, 'ball_'));
    console.log(k);
    
    //del array datos, dame todos los objetos de la propiedad owner.
    console.log(_.map(datos, 'owner'));

    //del array datos, dame todos los objetos de la propiedad pets.
    console.log(_.map(datos, 'pets'));

    //filtramos por un dato
    var propietario = _.map(datos, function(o) {
      if (o.owner == "Colin") return o;
    });
    console.log(propietario);
    // Remove undefines from the array
    propietario = _.without(propietario, undefined)

    //ESTA EL LA FORMA MÁS CORRECTA DE REALIZAR UN FILTRADO
    datos2=_.filter(datos, function(o) { 
      return o.owner == 'Colin'; 
   });
   console.log(datos2);

   datos2=_.filter(datos, {owner: 'Colin'});
   console.log(datos2);

    //de un array dame la propiedad pets, los que se encuentran en la posicion 0
    console.log(_.map(datos, 'pets[0].name'));

    //Clonamos un objeto
var objB = _.cloneDeep(datos);
console.log('Clonamos un objeto'+objB);


  }

}
