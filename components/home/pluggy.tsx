import { API_URL } from '@env';
import { StatusBar } from "expo-status-bar";
import React, { useCallback, useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { PluggyConnect } from "react-native-pluggy-connect";

interface PluggyProps {
  onClose: () => void;
}

export default function Pluggy({ onClose }: PluggyProps) {
  const [token, setToken] = useState<string>();
  const [error, setError] = useState<Record<string, unknown>>();

  useEffect(() => {
    async function fetchToken() {
      try {
        const response = await fetch(API_URL, {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        });

        const responseJson = await response.json();

        if (response.ok) {
          const { accessToken } = responseJson;
          setToken(accessToken);
        } else {
          setError(responseJson);
        }
      } catch (error: unknown) {
        setError({ message: (error as Error).message });
      }
    }

    fetchToken();
  }, []);

  const handleOnOpen = useCallback(() => {
    console.log("open");
  }, []);

  const handleOnSuccess = useCallback((itemData: { item: any }) => {
    console.log("success", itemData);
  }, []);

  const handleOnError = useCallback(
    (error: {
      message: string;
      data?: {
        item: any;
      };
    }) => {
      console.log("error", error);
    },
    []
  );

  const handleOnClose = useCallback(() => {
    onClose();
    setToken("");
  }, []);

  if (error) {
    return (
      <View style={styles.container}>
        <Text>There was an error</Text>
        <Text>{JSON.stringify(error, null, 2)}</Text>
        <StatusBar style="auto" />
      </View>
    );
  }

  if (!token) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
        <StatusBar style="auto" />
      </View>
    );
  }

  return (
    <PluggyConnect
      connectToken={token}
      includeSandbox={true}
      onOpen={handleOnOpen}
      onClose={handleOnClose}
      onSuccess={handleOnSuccess}
      onError={handleOnError}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
