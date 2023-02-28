terraform {
  required_providers {
    linode = {
      source  = "linode/linode"
      version = "1.27.1"
    }
  }
}

provider "linode" {
  token = var.token
}

resource "linode_instance" "kubeHost" {
  #        linode/ubuntu18.04
  image           = var.image
  label           = var.label
  group           = var.group
  region          = var.region
  #  "g6-nanode-1"
  type            = var.type
  authorized_keys = var.ssh
  root_pass       = var.root_pass
}

