USE [master]
GO
/****** Object:  Database [websitedb]    Script Date: 29/06/2023 14:09:57 ******/
CREATE DATABASE [websitedb]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'websitedb', FILENAME = N'D:\Program Files\Microsoft SQL Server\MSSQL16.SQLEXPRESS\MSSQL\DATA\websitedb.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'websitedb_log', FILENAME = N'D:\Program Files\Microsoft SQL Server\MSSQL16.SQLEXPRESS\MSSQL\DATA\websitedb_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT, LEDGER = OFF
GO
ALTER DATABASE [websitedb] SET COMPATIBILITY_LEVEL = 160
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [websitedb].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [websitedb] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [websitedb] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [websitedb] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [websitedb] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [websitedb] SET ARITHABORT OFF 
GO
ALTER DATABASE [websitedb] SET AUTO_CLOSE ON 
GO
ALTER DATABASE [websitedb] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [websitedb] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [websitedb] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [websitedb] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [websitedb] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [websitedb] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [websitedb] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [websitedb] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [websitedb] SET  ENABLE_BROKER 
GO
ALTER DATABASE [websitedb] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [websitedb] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [websitedb] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [websitedb] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [websitedb] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [websitedb] SET READ_COMMITTED_SNAPSHOT ON 
GO
ALTER DATABASE [websitedb] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [websitedb] SET RECOVERY SIMPLE 
GO
ALTER DATABASE [websitedb] SET  MULTI_USER 
GO
ALTER DATABASE [websitedb] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [websitedb] SET DB_CHAINING OFF 
GO
ALTER DATABASE [websitedb] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [websitedb] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [websitedb] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [websitedb] SET ACCELERATED_DATABASE_RECOVERY = OFF  
GO
ALTER DATABASE [websitedb] SET QUERY_STORE = ON
GO
ALTER DATABASE [websitedb] SET QUERY_STORE (OPERATION_MODE = READ_WRITE, CLEANUP_POLICY = (STALE_QUERY_THRESHOLD_DAYS = 30), DATA_FLUSH_INTERVAL_SECONDS = 900, INTERVAL_LENGTH_MINUTES = 60, MAX_STORAGE_SIZE_MB = 1000, QUERY_CAPTURE_MODE = AUTO, SIZE_BASED_CLEANUP_MODE = AUTO, MAX_PLANS_PER_QUERY = 200, WAIT_STATS_CAPTURE_MODE = ON)
GO
USE [websitedb]
GO
/****** Object:  Table [dbo].[__EFMigrationsHistory]    Script Date: 29/06/2023 14:09:57 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[__EFMigrationsHistory](
	[MigrationId] [nvarchar](150) NOT NULL,
	[ProductVersion] [nvarchar](32) NOT NULL,
 CONSTRAINT [PK___EFMigrationsHistory] PRIMARY KEY CLUSTERED 
(
	[MigrationId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Carts]    Script Date: 29/06/2023 14:09:57 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Carts](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Sum] [int] NOT NULL,
 CONSTRAINT [PK_Carts] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[CartSocks]    Script Date: 29/06/2023 14:09:57 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[CartSocks](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[CartId] [int] NOT NULL,
	[SockId] [int] NOT NULL,
 CONSTRAINT [PK_CartSocks] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Socks]    Script Date: 29/06/2023 14:09:57 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Socks](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Length] [int] NULL,
	[Name] [nvarchar](max) NULL,
	[Color] [nvarchar](max) NULL,
	[Material] [nvarchar](max) NULL,
	[Price] [int] NOT NULL,
	[Image] [nvarchar](max) NULL,
	[CartId] [int] NULL,
 CONSTRAINT [PK_Socks] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Users]    Script Date: 29/06/2023 14:09:57 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Users](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Age] [int] NOT NULL,
	[Name] [nvarchar](max) NULL,
	[Surname] [nvarchar](max) NULL,
	[Password] [nvarchar](max) NULL,
	[Email] [nvarchar](max) NULL,
	[CartId] [int] NOT NULL,
 CONSTRAINT [PK_Users] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20230628013933_CreateMigration', N'7.0.8')
GO
SET IDENTITY_INSERT [dbo].[Socks] ON 

INSERT [dbo].[Socks] ([Id], [Length], [Name], [Color], [Material], [Price], [Image], [CartId]) VALUES (1, 0, N'PlayWithUs', N'blue', N'silk', 12, N'Images/A1.jpg', NULL)
INSERT [dbo].[Socks] ([Id], [Length], [Name], [Color], [Material], [Price], [Image], [CartId]) VALUES (2, 0, N'NotSoLong', N'brown', N'cotton', 14, N'Images/A2.jpg', NULL)
INSERT [dbo].[Socks] ([Id], [Length], [Name], [Color], [Material], [Price], [Image], [CartId]) VALUES (3, 0, N'Ohlives', N'green', N'linen', 15, N'Images/A3.jpg', NULL)
INSERT [dbo].[Socks] ([Id], [Length], [Name], [Color], [Material], [Price], [Image], [CartId]) VALUES (4, 0, N'TreeAnimal', N'green', N'wool', 12, N'Images/A4.jpg', NULL)
INSERT [dbo].[Socks] ([Id], [Length], [Name], [Color], [Material], [Price], [Image], [CartId]) VALUES (5, 0, N'ShockoCitron', N'yellow', N'cotton', 10, N'Images/A5.jpg', NULL)
INSERT [dbo].[Socks] ([Id], [Length], [Name], [Color], [Material], [Price], [Image], [CartId]) VALUES (6, 0, N'FlAmigos', N'blue', N'linen', 18, N'Images/A6.jpg', NULL)
INSERT [dbo].[Socks] ([Id], [Length], [Name], [Color], [Material], [Price], [Image], [CartId]) VALUES (7, 0, N'SummerInTown', N'blue', N'wool', 16, N'Images/A7.jpg', NULL)
INSERT [dbo].[Socks] ([Id], [Length], [Name], [Color], [Material], [Price], [Image], [CartId]) VALUES (8, 0, N'YummyGummy', N'pink', N'cotton', 14, N'Images/A8.jpg', NULL)
INSERT [dbo].[Socks] ([Id], [Length], [Name], [Color], [Material], [Price], [Image], [CartId]) VALUES (9, 0, N'PigeOnTree', N'black', N'linen', 20, N'Images/A9.jpg', NULL)
INSERT [dbo].[Socks] ([Id], [Length], [Name], [Color], [Material], [Price], [Image], [CartId]) VALUES (10, 0, N'Coffcourse', N'black', N'cotton', 18, N'Images/A10.jpg', NULL)
INSERT [dbo].[Socks] ([Id], [Length], [Name], [Color], [Material], [Price], [Image], [CartId]) VALUES (11, 1, N'Hedgehog', N'green', N'cotton', 17, N'Images/C1.jpg', NULL)
INSERT [dbo].[Socks] ([Id], [Length], [Name], [Color], [Material], [Price], [Image], [CartId]) VALUES (12, 1, N'WinThis', N'orange', N'wool', 20, N'Images/C2.jpg', NULL)
INSERT [dbo].[Socks] ([Id], [Length], [Name], [Color], [Material], [Price], [Image], [CartId]) VALUES (13, 1, N'WaterMelody', N'red', N'linen', 15, N'Images/C3.jpg', NULL)
INSERT [dbo].[Socks] ([Id], [Length], [Name], [Color], [Material], [Price], [Image], [CartId]) VALUES (14, 1, N'DailyRoutine', N'pink', N'cotton', 16, N'Images/C4.jpg', NULL)
INSERT [dbo].[Socks] ([Id], [Length], [Name], [Color], [Material], [Price], [Image], [CartId]) VALUES (15, 1, N'OhBaby', N'blue', N'cotton', 19, N'Images/C5.jpg', NULL)
INSERT [dbo].[Socks] ([Id], [Length], [Name], [Color], [Material], [Price], [Image], [CartId]) VALUES (16, 1, N'GameOver', N'gray', N'wool', 18, N'Images/C6.jpg', NULL)
INSERT [dbo].[Socks] ([Id], [Length], [Name], [Color], [Material], [Price], [Image], [CartId]) VALUES (17, 1, N'Dogger', N'gray', N'linen', 20, N'Images/C7.jpg', NULL)
INSERT [dbo].[Socks] ([Id], [Length], [Name], [Color], [Material], [Price], [Image], [CartId]) VALUES (18, 1, N'Voila', N'gray', N'wool', 19, N'Images/C8.jpg', NULL)
INSERT [dbo].[Socks] ([Id], [Length], [Name], [Color], [Material], [Price], [Image], [CartId]) VALUES (19, 1, N'Nightmare', N'black', N'cotton', 20, N'Images/C9.jpg', NULL)
INSERT [dbo].[Socks] ([Id], [Length], [Name], [Color], [Material], [Price], [Image], [CartId]) VALUES (20, 1, N'P&a', N'gray', N'silk', 20, N'Images/C10.jpg', NULL)
INSERT [dbo].[Socks] ([Id], [Length], [Name], [Color], [Material], [Price], [Image], [CartId]) VALUES (21, 2, N'MyPlaylist', N'pink', N'linen', 23, N'Images/KH1.jpg', NULL)
INSERT [dbo].[Socks] ([Id], [Length], [Name], [Color], [Material], [Price], [Image], [CartId]) VALUES (22, 2, N'CinemaSnack', N'black', N'cotton', 25, N'Images/KH2.jpg', NULL)
INSERT [dbo].[Socks] ([Id], [Length], [Name], [Color], [Material], [Price], [Image], [CartId]) VALUES (23, 2, N'BaskON', N'green', N'linen', 25, N'Images/KH3.jpg', NULL)
INSERT [dbo].[Socks] ([Id], [Length], [Name], [Color], [Material], [Price], [Image], [CartId]) VALUES (24, 2, N'Beeest', N'yellow', N'cotton', 27, N'Images/KH4.jpg', NULL)
INSERT [dbo].[Socks] ([Id], [Length], [Name], [Color], [Material], [Price], [Image], [CartId]) VALUES (25, 2, N'AngryTiger', N'yellow', N'wool', 29, N'Images/KH5.jpg', NULL)
INSERT [dbo].[Socks] ([Id], [Length], [Name], [Color], [Material], [Price], [Image], [CartId]) VALUES (26, 2, N'LookUp', N'orange', N'cotton', 26, N'Images/KH6.jpg', NULL)
INSERT [dbo].[Socks] ([Id], [Length], [Name], [Color], [Material], [Price], [Image], [CartId]) VALUES (27, 2, N'WhereAmI', N'brown', N'linen', 27, N'Images/KH7.jpg', NULL)
INSERT [dbo].[Socks] ([Id], [Length], [Name], [Color], [Material], [Price], [Image], [CartId]) VALUES (28, 2, N'ColdON', N'blue', N'wool', 24, N'Images/KH8.jpg', NULL)
INSERT [dbo].[Socks] ([Id], [Length], [Name], [Color], [Material], [Price], [Image], [CartId]) VALUES (29, 2, N'SwimHere', N'blue', N'silk', 22, N'Images/KH9.jpg', NULL)
INSERT [dbo].[Socks] ([Id], [Length], [Name], [Color], [Material], [Price], [Image], [CartId]) VALUES (30, 2, N'WinterON', N'blue', N'wool', 25, N'Images/KH10.jpg', NULL)
INSERT [dbo].[Socks] ([Id], [Length], [Name], [Color], [Material], [Price], [Image], [CartId]) VALUES (31, 3, N'Blackers', N'black', N'cotton', 33, N'Images/TH1.jpg', NULL)
INSERT [dbo].[Socks] ([Id], [Length], [Name], [Color], [Material], [Price], [Image], [CartId]) VALUES (32, 3, N'LamaMama', N'blue', N'wool', 36, N'Images/TH2.jpg', NULL)
INSERT [dbo].[Socks] ([Id], [Length], [Name], [Color], [Material], [Price], [Image], [CartId]) VALUES (33, 3, N'DinoRARRR', N'black', N'linen', 34, N'Images/TH3.jpg', NULL)
INSERT [dbo].[Socks] ([Id], [Length], [Name], [Color], [Material], [Price], [Image], [CartId]) VALUES (34, 3, N'DinoPlace', N'violet', N'silk', 37, N'Images/TH4.jpg', NULL)
INSERT [dbo].[Socks] ([Id], [Length], [Name], [Color], [Material], [Price], [Image], [CartId]) VALUES (35, 3, N'SingWithUs', N'white', N'wool', 39, N'Images/TH5.jpg', NULL)
INSERT [dbo].[Socks] ([Id], [Length], [Name], [Color], [Material], [Price], [Image], [CartId]) VALUES (36, 3, N'OceanTouch', N'black', N'linen', 40, N'Images/TH6.jpg', NULL)
INSERT [dbo].[Socks] ([Id], [Length], [Name], [Color], [Material], [Price], [Image], [CartId]) VALUES (37, 3, N'ColStripes', N'blue', N'cotton', 34, N'Images/TH7.jpg', NULL)
INSERT [dbo].[Socks] ([Id], [Length], [Name], [Color], [Material], [Price], [Image], [CartId]) VALUES (38, 3, N'WannaRide', N'blue', N'silk', 39, N'Images/TH8.jpg', NULL)
INSERT [dbo].[Socks] ([Id], [Length], [Name], [Color], [Material], [Price], [Image], [CartId]) VALUES (39, 3, N'CatEye', N'black', N'wool', 38, N'Images/TH9.jpg', NULL)
INSERT [dbo].[Socks] ([Id], [Length], [Name], [Color], [Material], [Price], [Image], [CartId]) VALUES (40, 3, N'InForest', N'orange', N'linen', 33, N'Images/TH10.jpg', NULL)
SET IDENTITY_INSERT [dbo].[Socks] OFF
GO
/****** Object:  Index [IX_Socks_CartId]    Script Date: 29/06/2023 14:09:57 ******/
CREATE NONCLUSTERED INDEX [IX_Socks_CartId] ON [dbo].[Socks]
(
	[CartId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
ALTER TABLE [dbo].[Socks]  WITH CHECK ADD  CONSTRAINT [FK_Socks_Carts_CartId] FOREIGN KEY([CartId])
REFERENCES [dbo].[Carts] ([Id])
GO
ALTER TABLE [dbo].[Socks] CHECK CONSTRAINT [FK_Socks_Carts_CartId]
GO
USE [master]
GO
ALTER DATABASE [websitedb] SET  READ_WRITE 
GO
