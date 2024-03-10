import React, {useRef, useState} from 'react';
import {
  StyleSheet,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import Slider from '@react-native-community/slider';
import {Picker} from '@react-native-picker/picker';

const App = () => {
  const genders = ['Feminino', 'Masculino'];

  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [genderIndex, setGenderIndex] = useState(0);
  const [limit, setLimit] = useState(250);
  const [isStudent, setIsStudent] = useState(false);

  const sendData = () => {
    if (!name || !age) {
      alert('Preencha todos os campos!');
      return;
    }

    alert(
      'Conta aberta com sucesso!! \n\n' +
        'Nome: ' +
        name +
        '\n' +
        'Idade: ' +
        age +
        '\n' +
        'Sexo: ' +
        genders[genderIndex] +
        ' \n' +
        'Limite Conta: ' +
        limit.toFixed(2) +
        '\n' +
        'Conta Estudante: ' +
        (isStudent ? 'Ativo' : 'Inativo'),
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Banco React</Text>

      <View style={styles.form}>
        <Text style={styles.label}>Nome:</Text>
        <TextInput
          style={styles.textInput}
          underlineColorAndroid="transparent"
          placeholder="Digite seu nome"
          value={name}
          onChangeText={value => setName(value)}
        />

        <Text style={styles.label}>Idade:</Text>
        <TextInput
          style={styles.textInput}
          underlineColorAndroid="transparent"
          placeholder="Digite sua idade"
          keyboardType="numeric"
          value={age}
          onChangeText={value => setAge(value)}
        />

        <View style={{...styles.rowView, ...styles.smallPaddingBottom}}>
          <Text style={styles.label}>Sexo:</Text>
          <Picker
            style={styles.fullSize}
            selectedValue={genderIndex}
            onValueChange={value => setGenderIndex(value)}>
            {genders.map((gen, i) => (
              <Picker.Item key={i} value={i} label={gen} />
            ))}
          </Picker>
        </View>

        <View style={{...styles.rowView, ...styles.smallPaddingBottom}}>
          <Text style={styles.label}>Seu limite:</Text>
          <Text style={styles.textLimit}>{`R$ ${limit.toFixed(2)}`}</Text>
        </View>

        <View style={styles.largePaddingBottom}>
          <Slider
            minimumTrackTintColor="#FF0000"
            minimumValue={250}
            maximumValue={4000}
            value={limit}
            onValueChange={value => setLimit(value)}
          />
        </View>

        <View style={styles.rowView}>
          <Text style={styles.label}>Estudante:</Text>
          <Switch
            value={isStudent}
            onValueChange={value => setIsStudent(value)}
          />
        </View>

        <TouchableOpacity
          style={styles.button}
          underlayColor={'#000'}
          onPress={sendData}>
          <Text style={styles.buttonText}>Abrir Conta</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },

  form: {
    margin: 10,
  },

  logo: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000',
  },

  label: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },

  textLimit: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FF0000',
    paddingLeft: 5,
  },

  textInput: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#999',
    backgroundColor: '#EEE',
    color: '#000',
    marginTop: 5,
    marginBottom: 5,
    padding: 10,
    height: 38,
  },

  smallPaddingBottom: {
    paddingBottom: 5,
  },

  largePaddingBottom: {
    paddingBottom: 15,
  },

  rowView: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  fullSize: {
    flex: 1,
  },

  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
    height: 35,
    margin: 20,
    borderRadius: 150,
  },

  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFF',
  },
});

export default App;
