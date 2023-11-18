import React, { Component } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';
import Data from './src/users';
import { ScrollView } from 'react-native-web';
export default class App extends Component {
 
  constructor(props) {
     
        super(props);
        this.state = {
          tableHead: ['Id', 'Username', 'Password', 'UserType'],
          tableHead2: ['Id', 'Firstname', 'Lastname', 'Course'],
          tableHead3: ['Id', 'Name', 'Course'],

        }



  }
  

  render() {
    const students = Data.filter((user) => user.type === "Student");
    const Item = ({course, id, name}) => (
      
      <Rows data={[[id, `${name.fname} ${name.lname}`, course]]}  borderStyle={{borderWidth: 1, borderColor: '#FF8F8F' }} style={{borderBottomWidth: 1, borderColor: '#FF8F8F', borderRightWidth: 1, borderWidth: 1}} textStyle={styles.text}/>
     
    );

    const state = this.state;
    return (
      <View style={styles.container}>

      <Text style={{fontSize: 30, fontWeight: '500', color: '#860A35'}}>Accounts</Text>
              <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>

                <Row data={state.tableHead} style={styles.head} textStyle={{margin: 6, color: 'white'}}/>
                
                {Data.map((users)=>{
                  return(
                    <View>
                      <Rows data={[[users.id, users.user, users.pass, users.type]]} borderStyle={{borderWidth: 1, borderColor: '#FF8F8F' }} style={{borderBottomWidth: 1, borderColor: '#FF8F8F', borderRightWidth: 1, borderWidth: 1}} textStyle={styles.text}/>
                    </View>
                  )
                })}
              </Table>

      <Text style={{fontSize: 30, fontWeight: '500', color: '#860A35', marginTop: 20}}>Users</Text>
        <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
          <ScrollView>
              <Row data={state.tableHead2}  style={styles.head} textStyle={{margin: 6, color: 'white'}}/>
              
              {Data.map((users)=>{
                return(
                  <View>
                    <Rows data={[[users.id, users.name.fname, users.name.lname, users.course]]} borderStyle={{borderWidth: 1, borderColor: '#FF8F8F' }} style={{borderBottomWidth: 1, borderColor: '#FF8F8F', borderRightWidth: 1, borderWidth: 1}} textStyle={styles.text}/>
                  </View>
                )
              })}
          </ScrollView>

        </Table>

        <Text style={{fontSize: 30, fontWeight: '500', color: '#860A35', marginTop: 20}}>Students</Text>
        <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
              <Row data={state.tableHead3}  style={styles.head} textStyle={{margin: 6, color: 'white'}}/>
              
              <FlatList
              data={students}
              renderItem={({item}) => <Item course={item.course } id={item.id } name={item.name} />}
              
              keyExtractor={item => item.id}
            />
        
        </Table>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 35, backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: '#FF8F8F' },
  text: { margin: 6 }
});