import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import LoginForm from "@/modules/auth/login-form";
import NewPasswordForm from "@/modules/auth/new-password-form";
import OTPForm from "@/modules/auth/password-reset-otp-form";
import RegisterForm from "@/modules/auth/register-form";
import ResetPasswordForm from "@/modules/auth/reset-password-form";
import Success from "@/modules/auth/success";
import { X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";



const AuthPopUp =() => {
  const [isLoginPage, setIsloginPage] = useState<boolean>(true);
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const [isForgotPassword, setIsForgotPassword] = useState<boolean>(false);
  const [currentResetPasswordPage, setCurrentResetPasswordpage] =
    useState<string>("Enter Phone");
  const [currentSuccessPage, setCurrentSuccessPage] = useState<string>("");
  const [resetPhone, setResetPhone] = useState<string>("");
  useEffect(() => {});
  return (
    <Dialog
      open={isDialogOpen}
      onOpenChange={(isOpen) => {
        if (!isOpen) {
          // Reset the state when the dialog is closed
          setCurrentSuccessPage("");
        }
      }}
    >
      <DialogTrigger asChild>
        <div
          onClick={() => setIsDialogOpen(true)}
          className="border-none bg-transparent hover:cursor-pointer"
        >
          Login
        </div>
      </DialogTrigger>
      {currentSuccessPage === "" && (
        <DialogContent className="sm:max-w-[80vw] lg:min-h-[20rem] px-4 lg:py-12 md:py-12 py-10 flex flex-col">
          <DialogTitle></DialogTitle>
          <div
            onClick={() => {
              setIsDialogOpen(false);
              setCurrentSuccessPage("");
            }}
            className="absolute top-4 right-6 p-1 border hover:cursor-pointer hover:border-gray-600 border-gray-300 rounded-full"
          >
            <X size={20} />
          </div>
          <div className=" w-full h-full grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-4">
            <div className="flex flex-col items-center justify-center lg:border-r md:border-r sm:border-0">
              <div className="w-[150px] h-[60px] relative">
                <Image
                  alt="logo"
                  src="/images/logo.png"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <div className="flex lg:flex-row items-center md:flex-row flex-col gap-2 mt-2">
                <span className="font-semibold">Welcome to</span>
                <span className="font-semibold text-secondary_color">
                  NatSay.com.mm
                </span>
              </div>
              <div className="w-4/5 mt-6">
                <p className="text-center text-xs text-secondary_color leading-4">
                  Welcome to MedSupply Hub, your trusted source for high-
                  quality medical supplies. Log in to access a wide range of
                  products designed to meet your healthcare needs.
                </p>
              </div>
            </div>
            <div className="py-4 flex items-center justify-center">
              {isForgotPassword ? (
                <div className="w-full h-full flex items-center justify-center">
                  <div className="lg:w-3/4 w-full lg:p-0 md:p-0 p-4 h-full flex flex-col gap-4">
                    {currentResetPasswordPage === "Enter Phone" && (
                      <ResetPasswordForm
                        setResetPhone={setResetPhone}
                        setCurrentPage={setCurrentResetPasswordpage}
                        setIsForgotPasword={setIsForgotPassword}
                      />
                    )}
                    {currentResetPasswordPage === "Enter OTP" && (
                      <OTPForm
                        setCurrentPage={setCurrentResetPasswordpage}
                        setIsForgotPasword={setIsForgotPassword}
                      />
                    )}
                    {currentResetPasswordPage === "Enter New Password" && (
                      <NewPasswordForm
                        resetPhone={resetPhone}
                        setSuccessPage={setCurrentSuccessPage}
                        setIsCurrentPage={setCurrentResetPasswordpage}
                        setIsForgotPasword={setIsForgotPassword}
                      />
                    )}
                  </div>
                </div>
              ) : (
                <div className="lg:w-3/4 w-full lg:p-0 md:p-0 p-4 h-full flex flex-col gap-6">
                  <DialogHeader>
                    <DialogTitle className="flex flex-row items-center gap-8">
                      <span
                        onClick={() => setIsloginPage(true)}
                        className={cn("hover:cursor-pointer", {
                          "text-black font-semibold": isLoginPage,
                          "text-gray-300 font-light text-sm": !isLoginPage,
                        })}
                      >
                        Login
                      </span>
                      <span
                        onClick={() => setIsloginPage(false)}
                        className={cn("hover:cursor-pointer", {
                          "text-black font-semibold": !isLoginPage,
                          "text-gray-300 font-light text-sm": isLoginPage,
                        })}
                      >
                        Register
                      </span>
                    </DialogTitle>
                  </DialogHeader>
                  <div className="min-h-[15rem] w-full mt-6">
                    {isLoginPage ? (
                      <LoginForm
                        closeDialog={() => setIsDialogOpen(false)}
                        setIsForgotPasword={setIsForgotPassword}
                      />
                    ) : (
                      <RegisterForm
                        setCurrentSuccessPage={setCurrentSuccessPage}
                      />
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </DialogContent>
      )}
      {currentSuccessPage === "Register Success" && (
        <DialogContent className=" px-4 lg:py-12 md:py-12 py-10">
          <DialogTitle></DialogTitle>
          <div
            onClick={() => {
              setIsDialogOpen(false);
              setCurrentSuccessPage("");
            }}
            className="absolute top-4 right-6 p-1 border hover:cursor-pointer hover:border-gray-600 border-gray-300 rounded-full"
          >
            <X size={20} />
          </div>
          <Success label="Your account has been successfully created" />
        </DialogContent>
      )}
      {currentSuccessPage === "Reset Success" && (
        <DialogContent className="px-4 lg:py-12 md:py-12 py-10">
          <DialogTitle></DialogTitle>
          <div
            onClick={() => {
              setIsDialogOpen(false);
              setCurrentSuccessPage("");
            }}
            className="absolute top-4 right-6 p-1 border hover:cursor-pointer hover:border-gray-600 border-gray-300 rounded-full"
          >
            <X size={20} />
          </div>
          <Success label="Your password is successfully updated" />
        </DialogContent>
      )}
    </Dialog>
  );
}
export default AuthPopUp
