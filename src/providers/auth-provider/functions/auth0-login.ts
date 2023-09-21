export type TProviderName = 'gmail' | 'github' | 'apple' | 'facebook';

export default function Auth0Login(provider: TProviderName) {
  let dummyResponse;

  switch (provider) {
    case 'apple':
      dummyResponse = 'apple';
      break;
    case 'facebook':
      dummyResponse = 'facebook';
      break;
    case 'github':
      dummyResponse = 'github';
      break;
    case 'gmail':
      dummyResponse = 'gmail';
      break;
  }

  return dummyResponse;
}
