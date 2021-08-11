-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
CREATE PROCEDURE CreateUser
	-- Add the parameters for the stored procedure here
	@firstName NVARCHAR(max), 
    @lastName NVARCHAR(max),	
    @email NVARCHAR(max),
	@password NVARCHAR(max)
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

    -- Insert statements for procedure here
	 INSERT INTO dbo.[User] (FirstName, LastName, Email, Password)
        VALUES(@firstName, @lastName, @email, HASHBYTES('SHA2_512', @password))

END