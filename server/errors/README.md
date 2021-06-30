# Creating a custom exception
1. Always extend from ./BaseError

# Modifying formatter and BaseError
Refer to apollo official documentation: https://www.apollographql.com/docs/apollo-server/data/errors/#custom-errors 

# Code Naming Convention
Prefix with S, which stands for Server
then following prefix is the type of error:
- SYS: System Error
- UKN: Unknown Error