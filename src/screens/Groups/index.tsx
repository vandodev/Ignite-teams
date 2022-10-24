import { useState} from 'react';
import { useNavigation } from '@react-navigation/native'
import { FlatList } from 'react-native';

import { GroupCard } from '@components/GroupCard';
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import {Container, } from './styles'
import { ListEmpty } from '@components/ListEmpty';
import { Button } from '@components/Button';

// export function Groups(props) {
// export function Groups({navigation}) {
export function Groups() {
  const [groups, setGroups] = useState<string[]>(['Galera do ignite', 'Grupo de programação']);

  const navigation = useNavigation();

  function handleNewGroup() {
    // navigation.navigate('new');
    // props.navigation.navigate('new')
    navigation.navigate('new')
  }

  return (
    <Container>
      <Header/>
      <Highlight
        title='Turmas'
        subtitle='Jogue com a sua turma'
      />

      <FlatList
        data={groups}
        keyExtractor={item => item }
        renderItem={({item}) => (
          <GroupCard title={item} />
        )}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        ListEmptyComponent={() => (
          <ListEmpty message="Que tal cadastrar a primeira turma?" />
        )}
        showsVerticalScrollIndicator={false}
      />

      <Button
        title='Criar nova turma' 
        onPress={handleNewGroup}
       />
     
    </Container>    
  );
}