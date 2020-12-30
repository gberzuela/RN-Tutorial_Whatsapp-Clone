import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 50,
    marginRight: 15,
    backgroundColor: 'black',
  },
  container: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    padding: 10,
  },
  lastMessage: {
    fontSize: 16,
    color: 'grey'
  },
  leftContainer: {
    flexDirection: 'row',
  },
  midContainer: {
    justifyContent: 'space-around',
  },
  time: {
    fontSize: 16,
    color: 'grey'
  },
  userName: {
    fontWeight: 'bold',
    fontSize: 20,
  }
})

export default styles
