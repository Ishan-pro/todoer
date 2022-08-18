import supabase from './supabase';

export const Signup = async (email: string) => {
  let { user, error } = await supabase.auth.signIn({
    email
  });
  if (user) {
    console.log(` Success ${user}`)
  } else {
    console.log(error)
  }
};
