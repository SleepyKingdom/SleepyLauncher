interface Window {
  electronAPI: {
    loginWithMicrosoft: () => Promise<{ success: boolean; profile?: Record<string, unknown>; error?: string }>
  };
}