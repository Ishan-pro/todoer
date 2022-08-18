import supabase from '../supabase';

export const Signup = async (email: string) => {
  let { user, error } = await supabase.auth.signIn({
    email
  });
  if (user) {
    return user;
  } else {
    return false;
  }
};
