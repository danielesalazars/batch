export const UserQueries = {
  create: `
    INSERT INTO [user] (first_name, last_name, email, password_hash, role, is_active)
    OUTPUT inserted.*
    VALUES (@param1, @param2, @param3, @param4, @param5, @param6);`,
};
