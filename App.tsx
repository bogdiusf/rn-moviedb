import { StatusBar } from 'expo-status-bar';
import Navigator from './navigation/Navigator';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

export default function App() {
  return (
    <SafeAreaProvider>
      <QueryClientProvider client={queryClient}>
        <Navigator>
          <StatusBar style="auto" />
        </Navigator>
      </QueryClientProvider>
    </SafeAreaProvider>
  );
}
