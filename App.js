import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const OrderHistoryScreen = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Fetch orders from the server or use dummy data
    // For demonstration purposes, setting dummy data
    const dummyOrders = [
      { id: '1', date: '2022-05-01', total: 50.0 },
      { id: '2', date: '2022-05-03', total: 120.5 },
      { id: '3', date: '2022-05-08', total: 80.0 },
    ];
    setOrders(dummyOrders);
  }, []);

  const renderOrderItem = ({ item }) => (
    <View style={styles.orderItem}>
      <Text style={styles.orderId}>Order ID: {item.id}</Text>
      <Text style={styles.orderDate}>Date: {item.date}</Text>
      <Text style={styles.orderTotal}>Total: ${item.total.toFixed(2)}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Order History</Text>

      {orders.length === 0 ? (
        <Text style={styles.noOrdersText}>No orders found.</Text>
      ) : (
        <FlatList
          data={orders}
          keyExtractor={(item) => item.id}
          renderItem={renderOrderItem}
          style={styles.orderList}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'gray', // Light background color
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 16,
    color: 'white',
    justifyContent:"center",
    left:100,
    top:15
    
  },
  orderList: {
    flex: 1,
  },
  orderItem: {
    backgroundColor: '#ffffff', // White order item background
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    elevation: 2, // Adds a subtle shadow on Android
  },
  orderId: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333333', // Dark text color
  },
  orderDate: {
    fontSize: 16,
    marginBottom: 8,
    color: '#555555', // Slightly darker text color
  },
  orderTotal: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4CAF50', // Green total amount color
  },
  noOrdersText: {
    fontSize: 18,
    color: 'gray',
    textAlign: 'center',
  },
});

export default OrderHistoryScreen;
