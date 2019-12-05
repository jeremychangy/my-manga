export const login = (user) => {
  return (dispatch, getState, {getFirebase}) => {
    const firebase = getFirebase();
    
    firebase.auth().signInWithEmailAndPassword(
      user.email,
      user.password
    ).then(() => {
      dispatch({ type: 'LOGIN_SUCCESS' });
    }).catch((err) => {
      dispatch({ type: 'LOGIN_ERROR', err });
    });
  }
}

export const logout = () => {
  return (dispatch, getState, {getFirebase}) => {
    const firebase = getFirebase();
    firebase.auth().signOut().then(() => {
      console.log('logging out');
      dispatch({ type: 'LOGOUT_SUCCESS' });
    });
  }
}

export const signup = (newUser) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();

    firebase.auth().createUserWithEmailAndPassword(
      newUser.email, 
      newUser.password
    ).then(res => {
      return firestore.collection('users').doc(res.user.uid).set({
        username: newUser.username,
        friends: [],
        manga: []
      });
    }).then(() => {
      dispatch({ type: 'SIGNUP_SUCCESS' });
    }).catch((err) => {
      dispatch({ type: 'SIGNUP_ERROR', err});
    });

  }
}
