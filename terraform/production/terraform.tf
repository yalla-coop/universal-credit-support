terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.16"
    }
  }

  required_version = ">= 1.2.0"
}

resource "aws_cloudformation_stack" "bucket" {
  name = "${local.aws_bucket_name}"
  template_body = "${file("../cloudformation-templates/s3_bucket.yml")}"
  parameters = {
    BucketName = "${local.aws_bucket_name}"
    UserName = "${local.aws_bucket_user_name}"
  }
  capabilities = ["CAPABILITY_IAM", "CAPABILITY_NAMED_IAM"]
}