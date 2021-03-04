import React, {useState} from 'react'
import { View, Text, FlatList } from 'react-native'

import { connect } from 'react-redux'

import AppText from '../components/AppText'
import Backround from '../components/Backround'
import TaskButton from '../components/TaskButton'
import ActionButton from '../components/ActionButton'



const Home = ({todos}) => {

    const [id, setId] = useState(0)

    console.log(todos)
    return (
    <Backround>

      <FlatList
        data={todos}
        keyExtractor={(item)=> item.id.toString()}
        renderItem={({item})=>(
            <TaskButton 
                key={item.id} 
                title={item.title} 
                description={item.description} 
                id={item.id} 
                deadline={item.deadline} 
                completed={item.completed}  />
        )}
      />

      <ActionButton/>
    </Backround>
    )
}

const mapStateToProps = (state) => ({
    todos: state.todos
})
const mapDispatchProps = (dispatch) => ({

    toggleTodo: id => dispatch({ type: 'TOGGLE_TODO', id })
})

export default connect(mapStateToProps, mapDispatchProps ) (Home)
