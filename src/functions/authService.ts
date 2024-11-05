// authService.ts
export type LoginResponse = {
    success: boolean;
    token?: string;
    message?: string;
};

export const login = async (username: string, password: string): Promise<LoginResponse> => {
    try {
        const response = await fetch('https://yourserver.com/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        });

        if (!response.ok) {
            // Explicitly handle non-2xx responses
            const errorData = await response.json();
            return { success: false, message: errorData.message || 'Login failed' };
        }

        const data = await response.json();
        return { success: true, token: data.token };
    } catch (error) {
        console.error("Network or server error:", error);
        return { success: false, message: 'Network error' };
    }
};

