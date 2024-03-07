import Navigator from './navigation/Navigator';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { StatusBar } from 'react-native';

const queryClient = new QueryClient();

export default function App() {
  return (
    <SafeAreaProvider>
      <QueryClientProvider client={queryClient}>
        <Navigator>
          <StatusBar barStyle="light-content" />
        </Navigator>
      </QueryClientProvider>
    </SafeAreaProvider>
  );
}
