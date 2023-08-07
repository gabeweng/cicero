import streamlit as st

def speak(text):
  # ...

# Inject JavaScript code into the app
st.write("""
  <script>
    const speak = function(text) {
      // ...
    };
  </script>
""")

# Call the JavaScript function
st.write("""
  <script>
    speak("Hello, world!");
  </script>
""")