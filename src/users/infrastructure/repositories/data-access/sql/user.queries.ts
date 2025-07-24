export const UserQueries = {
  create: `
    INSERT INTO [user] (first_name, last_name, email, password_hash, role, is_active) 
    OUTPUT inserted.*
    VALUES (@first_name, @last_name, @Email, @password_hash, @role, @is_active);`,
};
